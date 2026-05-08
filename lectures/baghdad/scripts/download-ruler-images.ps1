param(
    [switch]$Force,
    [switch]$DryRun,
    [switch]$ValidateOnly,
    [int]$DelaySeconds = 5,
    [string[]]$Files
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images\rulers"
$timelineJs = Join-Path $root "js\baghdad-timeline.js"
$sourcesPath = Join-Path $outDir "sources.json"
$derivedPath = Join-Path $outDir "derived-sources.json"
$missingPath = Join-Path $outDir "missing-real-ruler-images.json"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{
    "User-Agent" = "HatraWebsiteRulerImages/1.0 (local historical lecture asset downloader; Wikimedia contact requested through site owner) PowerShell"
    "Api-User-Agent" = "HatraWebsiteRulerImages/1.0 (local historical lecture asset downloader; Wikimedia contact requested through site owner)"
    "Accept" = "application/json,image/avif,image/webp,image/apng,image/png,image/jpeg,image/*,*/*;q=0.8"
    "Referer" = "https://en.wikipedia.org/"
}

$titleAliases = @{
    "Al-Mansur" = "Al-Mansur (Abbasid caliph)"
    "Al-Hadi" = "Al-Hadi (Abbasid caliph)"
    "Al-Amin" = "Al-Amin (Abbasid caliph)"
    "Al-Mustain" = "Al-Musta'in (Abbasid caliph)"
    "Al-Mutamid" = "Al-Mu'tamid (Abbasid caliph)"
    "Al-Muti" = "Al-Muti (Abbasid caliph)"
    "Al-Ta'i" = "Al-Ta'i (Abbasid caliph)"
    "Al-Qadir" = "Al-Qadir (Abbasid caliph)"
    "Al-Muqtadi" = "Al-Muqtadi (Abbasid caliph)"
    "Al-Mustazhir" = "Al-Mustazhir (Abbasid caliph)"
    "Al-Mustarshid" = "Al-Mustarshid"
    "Al-Mustadi" = "Al-Mustadi"
    "Al-Nasir li-Din Allah" = "Al-Nasir li-Din Allah"
    "Az-Zahir (Abbasid caliph)" = "Az-Zahir (Abbasid caliph)"
    "Al-Mustansir (Baghdad)" = "Al-Mustansir (Baghdad)"
    "Al-Musta'sim" = "Al-Musta'sim"
    "Mohammed Shia' Al-Sudani" = "Mohammed Shia' Al Sudani"
}

$manualSources = @{
    "Marwan I" = "https://commons.wikimedia.org/wiki/Special:FilePath/Marwan_Caliph_Calligraphy.png?width=700"
    "Al-Mustain" = "https://commons.wikimedia.org/wiki/Special:FilePath/AlMustain.png?width=700"
    "Al-Qadir" = "https://commons.wikimedia.org/wiki/Special:FilePath/AlQadir.png?width=700"
    "Al-Qa'im (Abbasid caliph)" = "https://commons.wikimedia.org/wiki/Special:FilePath/AlQaim.png?width=700"
    "Al-Muqtadi" = "https://commons.wikimedia.org/wiki/Special:FilePath/AlMuqtadi.png?width=700"
    "Al-Mustazhir" = "https://commons.wikimedia.org/wiki/Special:FilePath/AlMustazhir.png?width=700"
    "Al-Rashid (Abbasid caliph)" = "https://commons.wikimedia.org/wiki/Special:FilePath/AlRashid.png?width=700"
    "Al-Muqtafi" = "https://commons.wikimedia.org/wiki/Special:FilePath/AlMuqtafi.png?width=700"
    "Abu Said Bahadur Khan" = "https://commons.wikimedia.org/wiki/Special:FilePath/Abu_sa%27id.jpg?width=900"
    "Arnold Wilson (British India)" = "https://commons.wikimedia.org/wiki/Special:FilePath/Sir_Arnold_Wilson.jpg?width=700"
    "Iskander Qara Qoyunlu" = "https://commons.wikimedia.org/wiki/Special:FilePath/Iskandar_ibn_Qara_Yusuf_(contemporary_portrait%2C_painted_circa_1430).jpg?width=700"
    "Baysunqur Aq Qoyunlu" = "https://commons.wikimedia.org/wiki/Special:FilePath/Gold_coin_of_the_Aq_Qoyunlu_ruler_Baysunghur%2C_Tabriz_mint.jpg?width=900"
    "Rustam Aq Qoyunlu" = "https://commons.wikimedia.org/wiki/Special:FilePath/Coin_of_Sultan_Rustam_(Aq_Qoyunlu).png?width=700"
    "Murad Aq Qoyunlu" = "https://commons.wikimedia.org/wiki/Special:FilePath/Coin_of_Sultan_Murad_(Aq_Qoyunlu).jpg?width=700"
    "Suleiman II" = "https://commons.wikimedia.org/wiki/Special:FilePath/Houghton_EC7_T4922_734c_(B)_-_Soliman_II.jpg?width=700"
    "Faisal II of Iraq" = "https://commons.wikimedia.org/wiki/Special:FilePath/King_Faisal_II_of_Iraq.jpg?width=700"
    "Henry Dobbs" = "https://www.topfoto.co.uk/asset/3097471/image"
}

$selectedFiles = @()
foreach ($fileArg in @($Files)) {
    if ([string]::IsNullOrWhiteSpace($fileArg)) { continue }
    $selectedFiles += ($fileArg -split ',' | ForEach-Object { $_.Trim().Trim('"').Trim("'") } | Where-Object { $_ })
}

function Get-RulerSlug {
    param([string]$Name)
    return (($Name.ToLowerInvariant() -replace '\.', '') -replace '[^a-z0-9]+', '-' -replace '^-+|-+$', '')
}

function Get-Field {
    param([string]$Line, [string]$Field)
    $match = [regex]::Match($Line, "$Field\s*:\s*(['""])(?<value>.*?)(?<!\\)\1")
    if (-not $match.Success) { return $null }
    return ($match.Groups["value"].Value -replace "\\'", "'" -replace '\\"', '"')
}

function Get-RulerFile {
    param([string]$Name, [string]$Portrait)

    if (-not [string]::IsNullOrWhiteSpace($Portrait)) {
        $normalized = ConvertTo-RelativeFileKey $Portrait
        if ($normalized -match '^images/rulers/([^/]+)$') {
            return $Matches[1]
        }
    }

    return "$(Get-RulerSlug $Name).jpg"
}

function Import-JsonArray {
    param([string]$Path)
    if (-not (Test-Path -LiteralPath $Path)) { return @() }
    $raw = Get-Content -LiteralPath $Path -Raw
    if ([string]::IsNullOrWhiteSpace($raw)) { return @() }
    $items = $raw | ConvertFrom-Json
    if ($null -eq $items) { return @() }
    if ($items -is [array]) { return $items }
    return @($items)
}

function ConvertTo-RelativeFileKey {
    param([string]$File)
    return ($File -replace '\\', '/').TrimStart('/')
}

function Get-RetryAfterSeconds {
    param($Response, [int]$FallbackSeconds)
    if ($Response -and $Response.Headers) {
        $value = $Response.Headers["Retry-After"]
        if ($value) {
            $seconds = 0
            if ([int]::TryParse($value.ToString(), [ref]$seconds) -and $seconds -gt 0) {
                return [Math]::Min($seconds, 300)
            }
        }
    }
    return $FallbackSeconds
}

function Invoke-PoliteRestJson {
    param([string]$Url)

    for ($attempt = 1; $attempt -le 5; $attempt++) {
        try {
            $result = Invoke-RestMethod -Uri $Url -Headers $headers -TimeoutSec 45
            if ($result.error -and $result.error.code -eq "maxlag") {
                $wait = 20 * $attempt
                Write-Warning "Wikimedia maxlag response; waiting $wait seconds."
                Start-Sleep -Seconds $wait
                continue
            }
            return $result
        } catch {
            $response = $_.Exception.Response
            $statusCode = if ($response) { [int]$response.StatusCode } else { 0 }
            if ($attempt -eq 5) { throw }

            if ($statusCode -eq 429 -or $statusCode -eq 503) {
                $wait = Get-RetryAfterSeconds -Response $response -FallbackSeconds (30 * $attempt)
            } else {
                $wait = 8 * $attempt
            }

            Write-Warning "Request failed with status $statusCode; retrying in $wait seconds."
            Start-Sleep -Seconds $wait
        }
    }
}

function Invoke-PoliteDownload {
    param([string]$Url, [string]$OutFile)

    for ($attempt = 1; $attempt -le 5; $attempt++) {
        try {
            Invoke-WebRequest -Uri $Url -OutFile $OutFile -Headers $headers -TimeoutSec 90
            return
        } catch {
            $response = $_.Exception.Response
            $statusCode = if ($response) { [int]$response.StatusCode } else { 0 }
            if ($attempt -eq 5) { throw }

            if ($statusCode -eq 429 -or $statusCode -eq 503) {
                $wait = Get-RetryAfterSeconds -Response $response -FallbackSeconds (30 * $attempt)
            } else {
                $wait = 8 * $attempt
            }

            Write-Warning "Download failed with status $statusCode; retrying in $wait seconds."
            Start-Sleep -Seconds $wait
        }
    }
}

function Test-RasterImage {
    param([string]$Path)

    try {
        Add-Type -AssemblyName System.Drawing -ErrorAction SilentlyContinue
        $img = [System.Drawing.Image]::FromFile($Path)
        $width = $img.Width
        $height = $img.Height
        $img.Dispose()
        return ($width -gt 80 -and $height -gt 80)
    } catch {
        return $false
    }
}

function Save-Image {
    param([string]$Url, [string]$Target)

    if ($Url -match '\.svg(\?|$)') {
        throw "Skipping SVG source: $Url"
    }

    $tmp = "$Target.download"
    Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
    Invoke-PoliteDownload -Url $Url -OutFile $tmp

    if (-not (Test-RasterImage -Path $tmp)) {
        Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue
        throw "Downloaded file is not a usable raster image."
    }

    Move-Item -LiteralPath $tmp -Destination $Target -Force
}

function Get-UsableImageSource {
    param($Page)

    if ($Page.original -and $Page.original.source -and $Page.original.source -notmatch '\.svg(\?|$)') {
        return $Page.original.source
    }
    if ($Page.thumbnail -and $Page.thumbnail.source) {
        return $Page.thumbnail.source
    }
    return $null
}

function Get-RulerImageUrl {
    param([string]$Title)

    $queryTitle = if ($titleAliases.ContainsKey($Title)) { $titleAliases[$Title] } else { $Title }
    if ($queryTitle -match 'ljeit') { $queryTitle = "Oljaitu" }

    if ($manualSources.ContainsKey($Title)) {
        return [pscustomobject]@{ source = $manualSources[$Title]; queryTitle = $queryTitle; method = "manual-commons" }
    }
    if ($manualSources.ContainsKey($queryTitle)) {
        return [pscustomobject]@{ source = $manualSources[$queryTitle]; queryTitle = $queryTitle; method = "manual-commons" }
    }

    $summaryUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/$([uri]::EscapeDataString($queryTitle))"
    try {
        $summary = Invoke-PoliteRestJson -Url $summaryUrl
        $source = Get-UsableImageSource -Page $summary
        if ($source) {
            return [pscustomobject]@{ source = $source; queryTitle = $queryTitle; method = "summary" }
        }
    } catch {
        Write-Warning "Summary lookup failed for $queryTitle."
    }

    $apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=original%7Cthumbnail&pithumbsize=900&titles=$([uri]::EscapeDataString($queryTitle))&maxlag=5"
    try {
        $api = Invoke-PoliteRestJson -Url $apiUrl
        $pages = $api.query.pages.PSObject.Properties.Value
        foreach ($page in $pages) {
            $source = Get-UsableImageSource -Page $page
            if ($source) {
                return [pscustomobject]@{ source = $source; queryTitle = $queryTitle; method = "pageimages" }
            }
        }
    } catch {
        Write-Warning "Page image lookup failed for $queryTitle."
    }

    return $null
}

function Get-DuplicateImageFiles {
    param([string]$Directory)

    $duplicates = @{}
    Get-ChildItem -LiteralPath $Directory -Filter *.jpg -File |
        Get-FileHash -Algorithm SHA256 |
        Group-Object Hash |
        Where-Object { $_.Count -gt 1 } |
        ForEach-Object {
            foreach ($entry in $_.Group) {
                $duplicates[(Split-Path -Leaf $entry.Path)] = $true
            }
        }
    return $duplicates
}

$sourceItems = Import-JsonArray -Path $sourcesPath
$sourceByFile = @{}
foreach ($item in $sourceItems) {
    $sourceByFile[(ConvertTo-RelativeFileKey $item.file)] = $item
}

$derivedItems = Import-JsonArray -Path $derivedPath
$derivedByFile = @{}
foreach ($item in $derivedItems) {
    $derivedByFile[(ConvertTo-RelativeFileKey $item.file)] = $item
}

$duplicateFiles = Get-DuplicateImageFiles -Directory $outDir

$rulers = @()
foreach ($line in Get-Content -Path $timelineJs) {
    if ($line -notmatch '\{\s*name\s*:') { continue }
    $name = Get-Field $line "name"
    $wikiTitle = Get-Field $line "wikiTitle"
    $portrait = Get-Field $line "portrait"
    if (-not $name -or -not $wikiTitle) { continue }

    $file = Get-RulerFile -Name $name -Portrait $portrait
    $relativeFile = "images/rulers/$file"
    if ($rulers | Where-Object { $_.relativeFile -eq $relativeFile }) { continue }

    $rulers += [pscustomobject]@{
        name = $name
        wikiTitle = $wikiTitle
        file = $file
        relativeFile = $relativeFile
    }
}

function Test-RulerImageSet {
    param($Rulers)

    $problems = @()
    $seenFiles = @{}
    $hashes = @{}

    foreach ($ruler in $Rulers) {
        $target = Join-Path $outDir $ruler.file
        $relativeFile = ConvertTo-RelativeFileKey $ruler.relativeFile

        if ($ruler.file -match 'fallback|placeholder|portrait-needed|missing|\.svg$') {
            $problems += "Disallowed fallback/placeholder reference: $($ruler.name) -> $relativeFile"
        }

        if ($seenFiles.ContainsKey($relativeFile)) {
            $problems += "Duplicate referenced file: $relativeFile <- $($seenFiles[$relativeFile]) / $($ruler.name)"
        } else {
            $seenFiles[$relativeFile] = $ruler.name
        }

        if (-not (Test-Path -LiteralPath $target)) {
            $problems += "Missing image file: $($ruler.name) -> $relativeFile"
            continue
        }

        if ($ruler.file -notmatch '\.svg$' -and -not (Test-RasterImage -Path $target)) {
            $problems += "Unusable raster image: $($ruler.name) -> $relativeFile"
            continue
        }

        $hash = (Get-FileHash -Algorithm SHA256 -LiteralPath $target).Hash
        if ($hashes.ContainsKey($hash)) {
            $problems += "Byte-identical duplicate image: $($hashes[$hash]) / $($ruler.name) -> $relativeFile"
        } else {
            $hashes[$hash] = "$($ruler.name) -> $relativeFile"
        }
    }

    return $problems
}

if ($ValidateOnly) {
    $problems = Test-RulerImageSet -Rulers $rulers
    if ($problems.Count -gt 0) {
        $problems | ForEach-Object { Write-Warning $_ }
        throw "Ruler image validation failed with $($problems.Count) problem(s)."
    }

    Write-Host "Ruler image validation passed for $($rulers.Count) entries."
    exit 0
}

$missing = @()
$refreshed = @()
$skipped = @()

foreach ($ruler in $rulers) {
    if ($selectedFiles.Count -gt 0 -and $selectedFiles -notcontains $ruler.file) {
        $skipped += $ruler
        continue
    }

    $target = Join-Path $outDir $ruler.file
    $relativeKey = ConvertTo-RelativeFileKey $ruler.relativeFile
    $exists = Test-Path -LiteralPath $target
    $isDuplicate = $duplicateFiles.ContainsKey($ruler.file)
    $isDerivedOnly = $derivedByFile.ContainsKey($relativeKey) -and -not $sourceByFile.ContainsKey($relativeKey)
    $shouldRefresh = $Force -or -not $exists -or $isDuplicate -or $isDerivedOnly

    if (-not $shouldRefresh) {
        $skipped += $ruler
        continue
    }

    Write-Host "Looking up $($ruler.name) -> $($ruler.wikiTitle)"
    Start-Sleep -Seconds $DelaySeconds

    $image = Get-RulerImageUrl -Title $ruler.wikiTitle
    if (-not $image) {
        if ($isDerivedOnly -and (Test-Path -LiteralPath $target)) {
            Remove-Item -LiteralPath $target -Force
            Write-Warning "No individual image found for $($ruler.name) / $($ruler.wikiTitle); removed derived fallback $($ruler.file)."
        } else {
            Write-Warning "No individual image found for $($ruler.name) / $($ruler.wikiTitle)."
        }
        $missing += $ruler
        continue
    }

    if ($DryRun) {
        Write-Host "Would save $($ruler.file) from $($image.source)"
        continue
    }

    try {
        Save-Image -Url $image.source -Target $target
        Write-Host "Saved $($ruler.file)"
        $sourceByFile[$relativeKey] = [pscustomobject]@{
            file = $ruler.relativeFile
            name = $ruler.name
            wikiTitle = $ruler.wikiTitle
            queryTitle = $image.queryTitle
            source = $image.source
            method = $image.method
        }
        $refreshed += $ruler
    } catch {
        Write-Warning "Could not download or validate image for $($ruler.name) / $($ruler.wikiTitle): $($_.Exception.Message)"
        $missing += $ruler
    }
}

$orderedSources = $sourceByFile.GetEnumerator() |
    Sort-Object Name |
    ForEach-Object { $_.Value }
$orderedSources | ConvertTo-Json -Depth 5 | Set-Content -Path $sourcesPath -Encoding UTF8
$missing | ConvertTo-Json -Depth 4 | Set-Content -Path $missingPath -Encoding UTF8

Write-Host "Refreshed $($refreshed.Count), skipped $($skipped.Count), missing $($missing.Count)."
