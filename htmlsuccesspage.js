const htmlsuccesspage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        .mainDiv {
            display: flex;
            align-items: center;
            margin: auto;
            flex-direction: column;
            text-align: center;
        }

        .continueShop {
            text-decoration: none;
            color: white;
            background-color: #FF4252;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            margin-top: 20px;
        }

        .continueShop:hover {
            text-decoration: underline;
        }

        .successIcon {
            color: #4CAF50;
            font-size: 48px;
            margin-bottom: 20px;
        }

        a {
            text-decoration: none;
        }
    </style>
    <title>paymentResult</title>
</head>
<body>
    <div class="mainDiv">
        <div>
            <i class="fas fa-check-circle successIcon"></i>
            <h1>Payment successfully Completed</h1>
        </div>

        <div>
            <a href="https://gleeful-daffodil-71cd10.netlify.app/">
                <button class="continueShop">
                    Continue Your Shopping <i class="fas fa-arrow-right" style="margin-left: 5px;"></i>
                </button>
            </a>
        </div>
    </div>
</body>
</html>
`;

module.exports = {htmlsuccesspage}
