$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images\foundation-cards"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
    "Referer" = "https://commons.wikimedia.org/"
}

$images = @(
    @{
        file = "abbasid-revolution-map.png"
        title = "Abbasid Revolution"
        page = "https://commons.wikimedia.org/wiki/File:Abbasid_Revolution.png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Abbasid_Revolution.png?width=900"
        license = "CC BY-SA 4.0"
    },
    @{
        file = "abbasid-banner.png"
        title = "Abbasid Flag"
        page = "https://commons.wikimedia.org/wiki/File:Abbasid_Flag.png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Abbasid_Flag.png?width=900"
        license = "Public domain"
    },
    @{
        file = "abu-muslim.jpg"
        title = "Portrait of Abu Muslim"
        page = "https://commons.wikimedia.org/wiki/File:Portrait_of_Abu_Muslim_(d._755)_from_the_genealogy_(silsilan%C4%81ma),_Cream_of_Histories_(Z%C3%BCbdet-%C3%BCt_Tevarih,_1598).jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Abu_Muslim_%28d._755%29_from_the_genealogy_%28silsilan%C4%81ma%29%2C_Cream_of_Histories_%28Z%C3%BCbdet-%C3%BCt_Tevarih%2C_1598%29.jpg?width=700"
        license = "Public domain mark"
    },
    @{
        file = "kufa-mosque.jpg"
        title = "Kufa Mosque in Iraq"
        page = "https://commons.wikimedia.org/wiki/File:Kufa_Mosque_in_Iraq.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Kufa_Mosque_in_Iraq.jpg?width=900"
        license = "CC BY 4.0"
    },
    @{
        file = "great-zab.jpg"
        title = "Great Zab 06"
        page = "https://commons.wikimedia.org/wiki/File:Great_Zab_06.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Zab_06.jpg?width=900"
        license = "CC BY-SA 4.0"
    },
    @{
        file = "abbasid-caliphate-map.png"
        title = "Abbasid Caliphate"
        page = "https://commons.wikimedia.org/wiki/File:Abbasid_Caliphate.png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Abbasid_Caliphate.png?width=1000"
        license = "CC BY-SA 4.0"
    },
    @{
        file = "mudbrick-borsippa.jpg"
        title = "Stamped mud-brick from Borsippa"
        page = "https://commons.wikimedia.org/wiki/File:Stamped_mud-brick_from_the_ziggurat_and_temple_of_Nabu,_Borsippa,_Iraq.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Stamped_mud-brick_from_the_ziggurat_and_temple_of_Nabu%2C_Borsippa%2C_Iraq.jpg?width=900"
        license = "CC BY-SA 4.0"
    },
    @{
        file = "round-city-le-strange.png"
        title = "Round City in the Time of Mansur"
        page = "https://commons.wikimedia.org/wiki/File:Round_City_in_the_Time_of_Mansur_(Le_Strange).png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Round_City_in_the_Time_of_Mansur_%28Le_Strange%29.png?width=900"
        license = "Public domain"
    },
    @{
        file = "round-city-baghdad.png"
        title = "The Round City of Baghdad"
        page = "https://commons.wikimedia.org/wiki/File:The_Round_City_of_Baghdad.png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/The_Round_City_of_Baghdad.png?width=900"
        license = "Public domain"
    }
)

$sources = @()
foreach ($image in $images) {
    $target = Join-Path $outDir $image.file
    if ((Test-Path -LiteralPath $target) -and ((Get-Item -LiteralPath $target).Length -gt 0)) {
        Write-Host "Already saved $($image.file)"
    } else {
        $saved = $false
        for ($attempt = 1; $attempt -le 4 -and -not $saved; $attempt++) {
            try {
                Invoke-WebRequest -Uri $image.source -OutFile $target -Headers $headers
                $saved = $true
            } catch {
                if ($attempt -eq 4) { throw }
                $delay = 8 * $attempt
                Write-Warning "Retrying $($image.file) in $delay seconds"
                Start-Sleep -Seconds $delay
            }
        }
        Write-Host "Saved $($image.file)"
        Start-Sleep -Seconds 3
    }

    $sources += [pscustomobject]@{
        file = "images/foundation-cards/$($image.file)"
        title = $image.title
        page = $image.page
        source = $image.source
        license = $image.license
    }
}

$sources | ConvertTo-Json -Depth 3 | Set-Content -Path (Join-Path $outDir "sources.json") -Encoding UTF8
