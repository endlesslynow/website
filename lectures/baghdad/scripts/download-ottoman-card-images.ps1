$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images\ottoman-cards"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
    "Referer" = "https://commons.wikimedia.org/"
}

$images = @(
    @{ file = "abu-hanifa-mosque.jpg"; title = "Abu Hanifa Mosque 1950"; page = "https://commons.wikimedia.org/wiki/File:Abu_Hanifa_Mosque_1950.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Abu_Hanifa_Mosque_1950.jpg?width=900"; license = "Public domain" },
    @{ file = "suleiman-enters-baghdad.jpg"; title = "Suleiman the Magnificent enters Baghdad"; page = "https://commons.wikimedia.org/wiki/File:%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86_%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A_%D9%8A%D8%AF%D8%AE%D9%84_%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86_%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A_%D9%8A%D8%AF%D8%AE%D9%84_%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF.jpg?width=900"; license = "Public domain" },
    @{ file = "shah-abbas.jpg"; title = "Portrait of Shah Abbas I"; page = "https://commons.wikimedia.org/wiki/File:Portrait_of_Shah_%E2%80%98Abbas_I._Attributed_to_Bishandas,_circa_1617_(cropped).jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Shah_%E2%80%98Abbas_I._Attributed_to_Bishandas%2C_circa_1617_(cropped).jpg?width=700"; license = "Public domain" },
    @{ file = "capture-of-baghdad-1638.jpg"; title = "The capture of Baghdad, 1638"; page = "https://commons.wikimedia.org/wiki/File:John_Harris_Valda_-_The_capture_of_Baghdad,_1638.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/John_Harris_Valda_-_The_capture_of_Baghdad%2C_1638.jpg?width=800"; license = "Public domain" },
    @{ file = "al-saray-mosque.jpg"; title = "Al-Saray Mosque, Baghdad"; page = "https://commons.wikimedia.org/wiki/File:Al-_Saray_Mosque_%D8%AC%D8%A7%D9%85%D8%B9_%D8%A7%D9%84%D8%B3%D8%B1%D8%A7%D9%8A.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Al-_Saray_Mosque_%D8%AC%D8%A7%D9%85%D8%B9_%D8%A7%D9%84%D8%B3%D8%B1%D8%A7%D9%8A.jpg?width=900"; license = "CC BY-SA 4.0" },
    @{ file = "baghdad-1683-map.jpg"; title = "Baghdad 1683"; page = "https://commons.wikimedia.org/wiki/File:Baghdad1683.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Baghdad1683.jpg?width=700"; license = "Public domain" },
    @{ file = "davud-pasha.jpg"; title = "Portrait of Davud Pasha of Baghdad"; page = "https://commons.wikimedia.org/wiki/File:Portrait_of_Davud_Pasha_of_Baghdad.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Davud_Pasha_of_Baghdad.jpg?width=800"; license = "CC BY 4.0" },
    @{ file = "baghdad-flood.jpg"; title = "Floods in Baghdad"; page = "https://commons.wikimedia.org/wiki/File:Floods_in_Baghdad.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Floods_in_Baghdad.jpg?width=800"; license = "CC0" },
    @{ file = "baghdad-map-1854.jpg"; title = "Baghdad map 1854"; page = "https://commons.wikimedia.org/wiki/File:Baghdad-map-1854.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Baghdad-map-1854.jpg?width=800"; license = "Public domain" },
    @{ file = "midhat-pasha-baghdad.jpg"; title = "Midhat Pasha and Baghdad officials, 1870"; page = "https://commons.wikimedia.org/wiki/File:Midhat_Pa%C5%9Fa_1870-1.2R_V02-1.1_raw_Belleten_SALT_Research.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Midhat_Pa%C5%9Fa_1870-1.2R_V02-1.1_raw_Belleten_SALT_Research.jpg?width=900"; license = "Public domain" },
    @{ file = "great-synagogue-baghdad.jpg"; title = "Great Synagogue of Baghdad"; page = "https://commons.wikimedia.org/wiki/File:Great_Synagogue_of_Baghdad.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Synagogue_of_Baghdad.jpg?width=900"; license = "Public domain" },
    @{ file = "baghdad-railway-map.png"; title = "Baghdad Railway map"; page = "https://commons.wikimedia.org/wiki/File:BagdadRailwayMapEn.png"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/BagdadRailwayMapEn.png?width=1000"; license = "CC BY-SA 3.0 / GFDL" },
    @{ file = "mesopotamian-campaign-map.jpg"; title = "Mesopotamian campaign map"; page = "https://commons.wikimedia.org/wiki/File:Meso_Campaign.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Meso_Campaign.jpg?width=1000"; license = "Public domain" },
    @{ file = "kut-before-surrender.png"; title = "Kut the day before surrender"; page = "https://commons.wikimedia.org/wiki/File:Kut,_the_day_before_surrender.png"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Kut%2C_the_day_before_surrender.png?width=900"; license = "Public domain" },
    @{ file = "maude-in-baghdad.jpg"; title = "Maude in Baghdad"; page = "https://commons.wikimedia.org/wiki/File:Maude_in_Baghdad.jpg"; source = "https://commons.wikimedia.org/wiki/Special:FilePath/Maude_in_Baghdad.jpg?width=1000"; license = "Public domain" }
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
        file = "images/ottoman-cards/$($image.file)"
        title = $image.title
        page = $image.page
        source = $image.source
        license = $image.license
    }
}

$sources | ConvertTo-Json -Depth 3 | Set-Content -Path (Join-Path $outDir "sources.json") -Encoding UTF8
