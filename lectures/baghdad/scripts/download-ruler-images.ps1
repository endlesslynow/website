$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$outDir = Join-Path $root "images\rulers"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" }

$items = @(
    @{ file = "al-mansur.jpg"; title = "Al-Mansur" },
    @{ file = "al-mahdi.jpg"; title = "Al-Mahdi (Abbasid caliph)" },
    @{ file = "al-hadi.jpg"; title = "Al-Hadi" },
    @{ file = "harun-al-rashid.jpg"; title = "Harun al-Rashid" },
    @{ file = "al-amin.jpg"; title = "Al-Amin" },
    @{ file = "al-mamun.jpg"; title = "Al-Ma'mun" },
    @{ file = "al-mutasim.jpg"; title = "Al-Mu'tasim" },
    @{ file = "al-wathiq.jpg"; title = "Al-Wathiq" },
    @{ file = "al-mutawakkil.jpg"; title = "Al-Mutawakkil" },
    @{ file = "samarra-caliphs.jpg"; title = "Anarchy at Samarra" },
    @{ file = "al-mutadid.jpg"; title = "Al-Mu'tadid" },
    @{ file = "al-muktafi.jpg"; title = "Al-Muktafi" },
    @{ file = "al-muqtadir.jpg"; title = "Al-Muqtadir" },
    @{ file = "later-abbasids.jpg"; title = "Abbasid Caliphate" },
    @{ file = "al-nasir.jpg"; title = "Al-Nasir li-Din Allah" },
    @{ file = "al-zahir.jpg"; title = "Az-Zahir (Abbasid caliph)" },
    @{ file = "al-mustansir.jpg"; title = "Al-Mustansir (Baghdad)" },
    @{ file = "al-mustasim.jpg"; title = "Al-Musta'sim" },
    @{ file = "hulagu-khan.jpg"; title = "Hulagu Khan" },
    @{ file = "abaqa-khan.jpg"; title = "Abaqa Khan" },
    @{ file = "various-ilkhans.jpg"; title = "Ilkhanate" },
    @{ file = "hasan-buzurg.jpg"; title = "Hasan Buzurg" },
    @{ file = "turkmen-sultans.jpg"; title = "Qara Qoyunlu" },
    @{ file = "shah-ismail-i.jpg"; title = "Ismail I" },
    @{ file = "suleiman-i.jpg"; title = "Suleiman the Magnificent" },
    @{ file = "ottoman-sultans.jpg"; title = "List of sultans of the Ottoman Empire" },
    @{ file = "british-admin.jpg"; title = "British Mandate of Mesopotamia" },
    @{ file = "king-faisal-i.jpg"; title = "Faisal I of Iraq" },
    @{ file = "various-kings.jpg"; title = "Faisal II of Iraq" },
    @{ file = "abd-al-karim-qasim.jpg"; title = "Abd al-Karim Qasim" },
    @{ file = "saddam-hussein.jpg"; title = "Saddam Hussein" },
    @{ file = "transitional-govt.jpg"; title = "Iraqi Governing Council" }
)

function Get-WikipediaImage($title) {
    $encoded = [uri]::EscapeDataString($title)
    $url = "https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&pithumbsize=900&piprop=thumbnail%7Coriginal&titles=$encoded"
    $response = Invoke-RestMethod -Uri $url -Headers $headers
    $page = $response.query.pages.PSObject.Properties.Value | Select-Object -First 1
    if ($page.thumbnail -and $page.thumbnail.source) {
        return @{ url = $page.thumbnail.source; page = $page.title; source = "Wikipedia page image" }
    }
    if ($page.original -and $page.original.source) {
        return @{ url = $page.original.source; page = $page.title; source = "Wikipedia page image" }
    }
    return $null
}

function Get-CommonsImage($title) {
    $query = [uri]::EscapeDataString($title + " portrait")
    $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=1&gsrsearch=$query&prop=imageinfo&iiprop=url&iiurlwidth=900"
    $response = Invoke-RestMethod -Uri $url -Headers $headers
    if (-not $response.query -or -not $response.query.pages) { return $null }
    $page = $response.query.pages.PSObject.Properties.Value | Select-Object -First 1
    $info = $page.imageinfo | Select-Object -First 1
    if ($info.thumburl) {
        return @{ url = $info.thumburl; page = $page.title; source = "Wikimedia Commons search" }
    }
    if ($info.url) {
        return @{ url = $info.url; page = $page.title; source = "Wikimedia Commons search" }
    }
    return $null
}

$manifest = @()
foreach ($item in $items) {
    $image = Get-WikipediaImage $item.title
    if (-not $image) { $image = Get-CommonsImage $item.title }
    if (-not $image) {
        Write-Warning "No image found for $($item.title)"
        continue
    }

    $target = Join-Path $outDir $item.file
    Start-Sleep -Milliseconds 900
    Invoke-WebRequest -Uri $image.url -OutFile $target -Headers $headers
    $manifest += [pscustomobject]@{
        file = "images/rulers/$($item.file)"
        lookupTitle = $item.title
        imagePage = $image.page
        source = $image.source
        downloadedFrom = $image.url
    }
    Write-Host "Downloaded $($item.file) <- $($image.page)"
}

$manifest | ConvertTo-Json -Depth 4 | Set-Content -Path (Join-Path $outDir "sources.json") -Encoding UTF8
