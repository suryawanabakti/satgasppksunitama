<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surat Satgas PPKS UNITAMA</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }

        .header {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }

        .content {
            margin-top: 20px;
            font-size: 14px;
            text-align: justify;
        }

        .signature {
            margin-top: 50px;
            text-align: right;
        }
    </style>
</head>

<body>
    <div class="header">
        <center>
            <img src="{{ public_path('lambang.png') }}" alt="Lambang" width="80px"> <br> <br>
            SURAT SATGAS PPKS UNITAMA
            <hr>
        </center>
    </div>

    <div class="content">

        <p>Status Pelapor: <strong>{{ $laporan->status_pelapor ?? 'korban' }}</strong></p>
        <p>Nama Pelapor: <strong>{{ $laporan->user->name ?? 'Irawati' }}</strong></p>
    </div>

    <div class="signature">
        <p>Ketua Satgas PPKS</p>
        <br><br>
        <p>_______________________</p>
    </div>
</body>

</html>
