const waitinglistTemplate = function (name: string, email: string) {
  const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linkbits.io quotation request</title>
    <style>
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/6d7bf85888fc8ef4357e0a27a0db8ce6.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/768446cc3d04d6dd3289ae1715bdb682.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: bold;
            font-weight: 700;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/2cc8c1d9627b43c950e209c838724aeb.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
        /* latin */
        @font-face {
            font-family: 'GT Walsheim';
            font-style: bold;
            font-weight: 900;
            font-display: swap;
            src: url("https://db.onlinewebfonts.com/t/46682a5505897003c69c26bf0dc2d3c0.woff2")format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            mso-font-alt: Arial;
        }
    </style>
    <style type="text/css">
        body {
            margin: 0;
            background-color: #cccccc;
        }
        table {
            border-spacing: 0;
        }
        td {
            padding: 0;
        }
        img {
            border: 0;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #cccccc;
            padding-bottom: 60px;
        }
        .main {
            background-color: #ffffff;
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            font-family: 'GT Walsheim', Arial, Helvetica, sans-serif;
            color: #171a1b;
        }
        .two-columns {
            text-align: center;
            font-size: 0;
        }
        .two-columns .column {
            width: 100%;
            max-width: 300px;
            display: inline-block;
            vertical-align: top;
        }
        .three-columns {
            text-align: center;
            font-size: 0;
            padding: 15px 0 15px;
        }
        .three-columns .column {
            width: 100%;
            max-width: 200px;
            display: inline-block;
            vertical-align: top;
        }
        .three-columns .padding {
            padding: 15px;
        }
        .three-columns .content {
            font-size: 13px;
            line-height: 18px;
            font-weight: 300;
        }
        .two-columns.last {
            padding: 15px 0;
        }
        .two-columns .padding {
            padding: 20px;
        }
        .two-columns .content {
            font-size: 13px;
            line-height: 18px;
            font-weight: 300;
            text-align: left;
        }
        .button {
            background-color: #0284c7;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 16px;
            font-weight: 400;
            border-radius: 5px;
        }    
    
    
    </style>
    </head>
    <body>
    
    <center class="wrapper">
        <table class="main" width="100%">
    
    <!-- TOP BORDER -->
                <tr>
                    <td height="6" style="background-color: #0891B2;"></td>
                </tr>
    
    
    <!-- BANNER IMAGE -->
                <tr>
                    <td>
                        <a href="https://www.aisupporthub.nl">
                            <img src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1768657492/banner_email_zgc8yg.jpg" alt="banner contact" width="600" style="max-width: 100%;">
                        </a>
                    </td>
                </tr>
    
    
    <!-- TITLE, TEXT & BUTTON -->
                <tr>
                    <td style="padding: 5px 0 0;">
                        <table width="100%">
                            <tr>
                                <td style="text-align: left; padding: 15px;">
                                    <p style="font-size: 15px; font-weight: 300;">Beste <span style="font-weight: 400;">${name}</span>,</p>
                                    
                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Dank je wel voor je inschrijving op de wachtlijst! Ik kom <span style="font-weight: 400;">snel</span> persoonlijk bij je terug op <span style="font-weight: 400; color: #0891B2;">${email}</span>.
                                    </p>

                                    <!-- Confirmation Box -->
                                    <div style="background: #F0F9FF; border-left: 4px solid #0891B2; padding: 20px; margin: 20px 0; border-radius: 4px;">
                                        <h3 style="font-size: 16px; font-weight: 600; color: #0891B2; margin: 0 0 10px 0;">Je inschrijving is ontvangen</h3>
                                        <p style="font-size: 14px; font-weight: 300; line-height: 20px; margin: 0; color: #374151;">
                                            Ik neem zo snel mogelijk contact met je op, meestal binnen enkele uren.
                                        </p>
                                    </div>

                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        Mijn naam is Jochgem van Delft, eigenaar van <span style="font-weight: 400; color: #0891B2;">AI Support Hub</span>. Wij koppelen jouw AI-project aan pre-screened Nederlandse engineers in kostenefficiënte regio.
                                    </p>

                                    <!-- Divider -->
                                    <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;">

                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 0 0 5px;">
                                        <span style="font-weight: 400;">Je hebt de volgende informatie verstuurd:</span>
                                    </p>

                                    <table style="width: 100%; font-size: 14px; font-weight: 300; line-height: 20px; margin: 10px 0 20px 0;">
                                        <tr>
                                            <td style="padding: 3px 0; width: 100px; color: #6B7280;">Naam:</td>
                                            <td style="padding: 3px 0;">${name}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 3px 0; color: #6B7280;">Email:</td>
                                            <td style="padding: 3px 0;">${email}</td>
                                        </tr>
                                    </table>

                                    <p style="font-size: 15px; font-weight: 300; line-height: 21px; padding: 20px 0 5px;">
                                        Met vriendelijke groet,
                                    </p>

                                    <p style="font-size: 15px; font-weight: 400; line-height: 16px; padding: 20px 0 5px; margin-bottom: 5px;">
                                        Jochgem van Delft<br>
                                        <span style="font-size: 10px; font-weight: 300; color: #6B7280;">Owner</span>
                                    </p>

                                    <a href="https://www.aisupporthub.nl">
                                        <img 
                                            src="https://res.cloudinary.com/dqvs8sk1o/image/upload/v1768644302/linkbits-logo_vnnjp4.svg" 
                                            alt="AI Support Hub Logo" 
                                            width="120" 
                                            title="AI Support Hub"
                                            style="margin: 2px 0;"
                                        >
                                    </a>

                                    <!-- Footer -->
                                    <p style="font-size: 10px; font-weight: 300; line-height: 14px; padding: 20px 0 0 0; margin: 20px 0 0 0; border-top: 1px solid #E5E7EB; color: #9CA3AF;">
                                        De informatie verzonden in dit e-mailbericht is vertrouwelijk en is uitsluitend bestemd voor de geadresseerde. Openbaarmaking, vermenigvuldiging,
                                        verspreiding en/of verstrekking van deze informatie aan derden is, behoudens voorafgaande schriftelijke toestemming van AISupportHub.nl, niet toegestaan.
                                        AISupportHub.nl staat niet in voor de juiste en volledige overbrenging van de inhoud van een verzonden e-mailbericht, noch voor tijdige ontvangst daarvan.
                                        AISupportHub.nl kan niet garanderen dat een verzonden e-mailbericht vrij is van virussen, noch dat e-mailberichten worden overgebracht zonder inbreuk
                                        of tussenkomst van onbevoegde derden. Indien bovenstaand e-mailbericht niet aan u is gericht, dient u het e-mailbericht te retourneren aan de
                                        verzender en het origineel en eventuele kopieën te verwijderen en te vernietigen. AISupportHub.nl hanteert bij de uitoefening van haar werkzaamheden
                                        algemene voorwaarden, waarin een beperking van aansprakelijkheid is opgenomen. De algemene voorwaarden kunt u inzien/verkrijgen via
                                        www.AISupportHub.nl.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
    
    
    <!-- BLUE BORDER -->
                <tr>
                    <td height="6" style="background-color: #0891B2;"></td>
                </tr>
    
            </table>
        </center>
    
    </body>
    </html>`;
  const text = `
        Waitinglist inschrijving aisupporthub.nl.
        Als je dit verzoek niet hebt verstuurd, neem dan alstublieft onmiddellijk contact met me op via 06 27 330 867 of info@linkbits.io om eventuele misverstanden of ongeautoriseerde verzoeken te verifiëren.`;
  return {
    html: html,
    text: text,
  };
};

export default waitinglistTemplate;
