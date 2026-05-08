$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images\rulers"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
    "Referer" = "https://en.wikipedia.org/"
}

$rulers = @(
    @{ file = "al-mansur.jpg"; title = "Al-Mansur" },
    @{ file = "al-mahdi.jpg"; title = "Al-Mahdi" },
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
    @{ file = "al-nasir.jpg"; title = "Al-Nasir" },
    @{ file = "al-zahir.jpg"; title = "Al-Zahir" },
    @{ file = "al-mustansir.jpg"; title = "Al-Mustansir I"; directUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/Dirham_of_Al-Mustansir%2C_AH_623-640.jpg?width=800" },
    @{ file = "al-mustasim.jpg"; title = "Al-Musta'sim" },
    @{ file = "hulagu-khan.jpg"; title = "Hulegu Khan" },
    @{ file = "abaqa-khan.jpg"; title = "Abaqa Khan" },
    @{ file = "various-ilkhans.jpg"; title = "Ilkhanate" },
    @{ file = "hasan-buzurg.jpg"; title = "Hasan Buzurg" },
    @{ file = "turkmen-sultans.jpg"; title = "Qara Qoyunlu" },
    @{ file = "shah-ismail-i.jpg"; title = "Ismail I"; directUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Ismail_I_Safavid%2C_Behzad_%28portrait_detail%29.jpg?width=700" },
    @{ file = "suleiman-i.jpg"; title = "Suleiman the Magnificent" },
    @{ file = "ottoman-sultans.jpg"; title = "List of sultans of the Ottoman Empire" },
    @{ file = "british-admin.jpg"; title = "British Mandate of Mesopotamia" },
    @{ file = "king-faisal-i.jpg"; title = "Faisal I of Iraq" },
    @{ file = "various-kings.jpg"; title = "Faisal II of Iraq" },
    @{ file = "abd-al-karim-qasim.jpg"; title = "Abd al-Karim Qasim" },
    @{ file = "saddam-hussein.jpg"; title = "Saddam Hussein"; directUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/Saddam_Hussein_1960s_Portrait.png?width=700" },
    @{ file = "transitional-govt.jpg"; title = "Iraqi Governing Council"; directUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/Bremer_iraqi_council.jpg?width=900" }
)

$sources = @()
foreach ($ruler in $rulers) {
    $target = Join-Path $outDir $ruler.file
    if ((Test-Path -LiteralPath $target) -and ((Get-Item -LiteralPath $target).Length -gt 0)) {
        Write-Host "Already saved $($ruler.file)"
        continue
    }

    Start-Sleep -Seconds 2
    $imageUrl = $ruler.directUrl
    if (-not $imageUrl) {
        $summaryUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/$([uri]::EscapeDataString($ruler.title))"
        try {
            $summary = Invoke-RestMethod -Uri $summaryUrl -Headers $headers
        } catch {
            Write-Warning "Wikipedia page not found for $($ruler.title)"
            continue
        }
        if ($summary.thumbnail -and $summary.thumbnail.source) {
            $imageUrl = $summary.thumbnail.source
        } elseif ($summary.originalimage -and $summary.originalimage.source) {
            $imageUrl = $summary.originalimage.source
        }
    }

    if (-not $imageUrl) {
        Write-Warning "No image found for $($ruler.title)"
        continue
    }

    try {
        Invoke-WebRequest -Uri $imageUrl -OutFile $target -Headers $headers
    } catch {
        Write-Warning "Could not download image for $($ruler.title)"
        continue
    }
    $sources += [pscustomobject]@{
        file = "images/rulers/$($ruler.file)"
        title = $ruler.title
        source = $imageUrl
    }
    Write-Host "Saved $($ruler.file)"
    Start-Sleep -Seconds 2
}

$sources | ConvertTo-Json -Depth 3 | Set-Content -Path (Join-Path $outDir "sources.json") -Encoding UTF8
