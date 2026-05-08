$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images\golden-age-cards"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
    "Referer" = "https://commons.wikimedia.org/"
}

$images = @(
    @{
        file = "harun-envoys.jpg"
        title = "Harun al-Rashid receives envoys from Charlemagne"
        page = "https://commons.wikimedia.org/wiki/File:Harun_al-Rashid_receives_envoys_from_Charlemagne.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Harun_al-Rashid_receives_envoys_from_Charlemagne.jpg?width=900"
        license = "Public domain"
    },
    @{
        file = "barmakid-purge.png"
        title = "Killing of Ja'far Al-Barmaki"
        page = "https://commons.wikimedia.org/wiki/File:Killing_of_Ja%CA%BBfar_Al-Barmaki.png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Killing_of_Ja%CA%BBfar_Al-Barmaki.png?width=800"
        license = "Public domain"
    },
    @{
        file = "baghdad-150-300-ah.png"
        title = "Baghdad 150 to 300 AH"
        page = "https://commons.wikimedia.org/wiki/File:Baghdad_150_to_300_AH.png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Baghdad_150_to_300_AH.png?width=900"
        license = "Public domain"
    },
    @{
        file = "baghdad-library.jpg"
        title = "A Library in Golden Islamic Age"
        page = "https://commons.wikimedia.org/wiki/File:A_Library_in_Golden_Islamic_Age.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/A_Library_in_Golden_Islamic_Age.jpg?width=800"
        license = "Public domain"
    },
    @{
        file = "islamic-astrolabe.jpg"
        title = "Astrolabe planispherique closeup"
        page = "https://commons.wikimedia.org/wiki/File:Astrolabe_planisf%C3%A9rique_closeup800x600x300.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe_planisf%C3%A9rique_closeup800x600x300.jpg?width=900"
        license = "CC BY-SA 3.0"
    },
    @{
        file = "al-khwarizmi-manuscript.jpg"
        title = "Al-Khwarizmi manuscript"
        page = "https://commons.wikimedia.org/wiki/File:%D8%A7%D9%84%D8%AE%D9%88%D8%A7%D8%B1%D8%B2%D9%85%DB%8C_%DA%A9%DB%8C_%DA%A9%D8%AA%D8%A7%D8%A8.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/%D8%A7%D9%84%D8%AE%D9%88%D8%A7%D8%B1%D8%B2%D9%85%DB%8C_%DA%A9%DB%8C_%DA%A9%D8%AA%D8%A7%D8%A8.jpg?width=700"
        license = "CC0"
    },
    @{
        file = "samarra-mosque.jpg"
        title = "Great Mosque of Samarra"
        page = "https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Samarra.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Samarra.jpg?width=800"
        license = "CC BY 3.0"
    },
    @{
        file = "abbasid-palace.jpg"
        title = "Abbasid Palace"
        page = "https://commons.wikimedia.org/wiki/File:Abbasid_Palace.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Abbasid_Palace.jpg?width=900"
        license = "CC BY-SA 4.0"
    },
    @{
        file = "buyid-map.png"
        title = "Buyid Dynasty 934-1055"
        page = "https://commons.wikimedia.org/wiki/File:Buyid_Dynasty_934_1055_(AD).PNG"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Buyid_Dynasty_934_1055_%28AD%29.PNG?width=900"
        license = "Public domain"
    },
    @{
        file = "buyid-coin.jpg"
        title = "Imad al-Dawla coin"
        page = "https://commons.wikimedia.org/wiki/File:Imad_al-Dawla_coin.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Imad_al-Dawla_coin.jpg?width=900"
        license = "See Commons page"
    },
    @{
        file = "nizam-al-mulk.png"
        title = "Nizam al-Mulk"
        page = "https://commons.wikimedia.org/wiki/File:Nizam_Al-Mulk.png"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Nizam_Al-Mulk.png?width=700"
        license = "CC BY-SA 4.0"
    },
    @{
        file = "ibn-jubayr-route.png"
        title = "Ibn Jubayr first journey route map"
        page = "https://commons.wikimedia.org/wiki/File:Ibn_Jubair_journey_-_ar.png"
        source = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ibn_Jubair_journey_-_ar.png/960px-Ibn_Jubair_journey_-_ar.png"
        license = "CC BY-SA 4.0"
    },
    @{
        file = "mustansiriya-courtyard.jpg"
        title = "Courtyard of the Mustansiriya Madrasa"
        page = "https://commons.wikimedia.org/wiki/File:%D8%A8%D8%A7%D8%AD%D8%A9_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%B5%D8%B1%D9%8A%D8%A9.jpg"
        source = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%D8%A8%D8%A7%D8%AD%D8%A9_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%B5%D8%B1%D9%8A%D8%A9.jpg/960px-%D8%A8%D8%A7%D8%AD%D8%A9_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%B5%D8%B1%D9%8A%D8%A9.jpg"
        license = "CC BY-SA 4.0"
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
        file = "images/golden-age-cards/$($image.file)"
        title = $image.title
        page = $image.page
        source = $image.source
        license = $image.license
    }
}

$sources | ConvertTo-Json -Depth 3 | Set-Content -Path (Join-Path $outDir "sources.json") -Encoding UTF8
