<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validação de Documentos — GOV.BR</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
 <!-- Ícone Oficial GOV.BR -->
<link rel="icon" type="image/png" sizes="32x32" href="https://www.gov.br/governodigital/++theme++padrao_govbr/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://www.gov.br/governodigital/++theme++padrao_govbr/favicons/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://www.gov.br/governodigital/++theme++padrao_govbr/favicons/apple-touch-icon.png">
<link rel="shortcut icon" href="https://www.gov.br/governodigital/++theme++padrao_govbr/favicons/favicon-48x48.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
    
    <style>
        :root {
            --blue: #1351B4;
            --blue-dark: #0C326F;
            --blue-hover: #0F4090;
            --blue-light: #E8F0FE;
            --yellow: #FFD700;
            --yellow-dark: #E6C200;
            --green: #0F7B3A;
            --green-light: #E8F5E9;
            --red: #D92525;
            --red-light: #FFEBEE;
            --white: #FFFFFF;
            --gray-bg: #EDEDED;
            --gray-10: #F5F5F5;
            --gray-20: #E8E8E8;
            --gray-30: #D9D9D9;
            --gray-40: #CCCCCC;
            --gray-50: #BFBFBF;
            --gray-60: #999999;
            --gray-70: #666666;
            --gray-80: #333333;
            --gray-90: #1A1A1A;
            --max-w: 1200px;
            --radius: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
            --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
            --transition: 0.2s ease;
        }
        
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
        
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #EDEDED;
    background-image: 
        url('https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/01/15/istock-522553522-1ib5yv52i4z1d.jpg');
    background-size: cover;
    background-position: center 30%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: var(--gray-80);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    min-width: 320px;
    overflow-x: hidden;
}

/* Efeito de overlay cinza por cima da imagem */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(237, 237, 237, 0.88);
    z-index: 0;
    pointer-events: none;
}

/* Garantir que o conteúdo fique visível */
.topbar, .header, .nav-bar, .main, .footer, .modal-overlay {
    position: relative;
    z-index: 1;
}
        
        .skip-link { position: absolute; top: -100px; left: 0; background: var(--blue); color: #fff; padding: 10px 18px; z-index: 9999; font-size: 12px; font-weight: 700; text-decoration: none; border-radius: 0 0 4px 0; transition: top 0.3s; }
        .skip-link:focus { top: 0; }
        
        .topbar { background: var(--blue-dark); color: rgba(255,255,255,0.9); font-size: 10px; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .topbar .inner { max-width: var(--max-w); margin: 0 auto; padding: 0 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; }
        .topbar .links { display: flex; align-items: center; flex-wrap: wrap; gap: 1px; }
        .topbar .links a { color: rgba(255,255,255,0.8); text-decoration: none; padding: 3px 7px; border-radius: 3px; transition: all 0.2s; white-space: nowrap; font-size: 10px; }
        .topbar .links a:hover { color: #fff; text-decoration: underline; background: rgba(255,255,255,0.05); }
        .topbar .links .sep { color: rgba(255,255,255,0.2); margin: 0 1px; user-select: none; }
        .topbar .a11y-btns { display: flex; gap: 3px; }
        .topbar .a11y-btns button { background: none; border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.8); padding: 3px 8px; font-size: 10px; cursor: pointer; border-radius: 3px; font-family: inherit; transition: all 0.2s; }
        .topbar .a11y-btns button:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.4); }
        
        .header { background: var(--white); position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 6px rgba(0,0,0,0.05); border-bottom: 1px solid var(--gray-30); }
        .header .inner { max-width: var(--max-w); margin: 0 auto; padding: 8px 16px; display: flex; justify-content: space-between; align-items: center; min-height: 54px; gap: 10px; }
        .logo-link { display: flex; align-items: center; gap: 8px; text-decoration: none; flex-shrink: 0; }
.logo-flag {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo-flag img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
        .logo-text { font-size: 19px; font-weight: 900; letter-spacing: -0.3px; line-height: 1; display: flex; align-items: baseline; }
        .logo-text .g { color: var(--blue); } .logo-text .o { color: var(--yellow); } .logo-text .v { color: var(--green); } .logo-text .dot { color: var(--gray-60); font-weight: 500; } .logo-text .b { color: var(--blue); } .logo-text .r { color: var(--yellow); }
        .logo-sub { font-size: 7px; color: var(--gray-60); font-weight: 600; letter-spacing: 0.6px; text-transform: uppercase; line-height: 1; margin-top: 1px; }
        .header-actions { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; }
        .btn-out { padding: 7px 14px; border: 1.5px solid var(--blue); color: var(--blue); background: transparent; border-radius: 20px; font-size: 10px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-family: inherit; white-space: nowrap; }
        .btn-out:hover { background: var(--blue-light); border-color: var(--blue-dark); color: var(--blue-dark); }
        .btn-solid { padding: 7px 16px; background: var(--blue); color: #fff; border: none; border-radius: 20px; font-size: 10px; font-weight: 700; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-family: inherit; white-space: nowrap; }
        .btn-solid:hover { background: var(--blue-hover); box-shadow: 0 3px 10px rgba(19,81,180,0.25); transform: translateY(-1px); }
        .btn-solid.gold { background: var(--yellow); color: var(--blue-dark); font-weight: 800; }
        .btn-solid.gold:hover { background: var(--yellow-dark); box-shadow: 0 3px 10px rgba(255,215,0,0.35); }
        
        .nav-bar { background: var(--white); border-bottom: 1px solid var(--gray-20); overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .nav-bar::-webkit-scrollbar { display: none; }
        .nav-bar .inner { max-width: var(--max-w); margin: 0 auto; padding: 0 16px; display: flex; flex-wrap: nowrap; min-width: fit-content; }
        .nav-bar a { display: inline-flex; align-items: center; gap: 4px; padding: 9px 12px; font-size: 10px; font-weight: 500; color: var(--gray-70); text-decoration: none; border-bottom: 3px solid transparent; transition: all 0.2s; white-space: nowrap; flex-shrink: 0; }
        .nav-bar a:hover { color: var(--blue); background: #F8FAFF; }
        .nav-bar a.active { color: var(--blue); border-bottom-color: var(--blue); font-weight: 700; }
        
        .main { max-width: var(--max-w); margin: 0 auto; padding: 16px; }
        .breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 3px; font-size: 10px; color: var(--gray-60); margin-bottom: 14px; }
        .breadcrumb a { color: var(--blue); text-decoration: none; font-weight: 500; } .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb .arr { font-size: 7px; color: var(--gray-50); margin: 0 2px; } .breadcrumb .cur { color: var(--gray-70); font-weight: 500; }
        .page-title { margin-bottom: 20px; }
        .page-title h1 { font-size: clamp(20px, 4vw, 28px); font-weight: 900; color: var(--gray-90); margin-bottom: 4px; letter-spacing: -0.5px; line-height: 1.2; }
        .page-title p { font-size: clamp(11px, 2vw, 13px); color: var(--gray-60); max-width: 620px; }
        
        .search-hero { position: relative; background: #E6E6E6; border: 1px solid var(--gray-30); border-radius: var(--radius-lg); padding: clamp(20px, 4vw, 32px); margin-bottom: 22px; overflow: hidden; box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center; min-height: 180px; }
        .search-hero::before { content: 'gov.br'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: clamp(80px, 15vw, 160px); font-weight: 900; color: rgba(255,255,255,0.5); letter-spacing: -4px; line-height: 1; pointer-events: none; z-index: 0; user-select: none; white-space: nowrap; }
        .search-hero .search-content { position: relative; z-index: 1; width: 100%; max-width: 600px; }
        .search-hero h2 { font-size: clamp(14px, 3vw, 17px); font-weight: 700; color: var(--gray-90); margin-bottom: 3px; }
        .search-hero .sub { font-size: clamp(10px, 2vw, 11px); color: var(--gray-70); margin-bottom: 14px; }
        .search-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .search-row input { flex: 1 1 180px; min-width: 0; padding: 10px 14px; border: 2px solid var(--gray-40); border-radius: 22px; font-size: 12px; font-family: 'Courier New', monospace; letter-spacing: 0.8px; transition: all 0.2s; background: var(--white); }
        .search-row input:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 4px rgba(19,81,180,0.05); }
        .search-row input::placeholder { font-family: 'Inter', sans-serif; letter-spacing: 0; color: var(--gray-50); font-size: 11px; }
        .search-row .btn-solid { padding: 10px 18px; border-radius: 22px; font-size: 11px; flex-shrink: 0; }
        .search-row .btn-out { padding: 10px 14px; border-radius: 22px; font-size: 11px; flex-shrink: 0; }
        
        .section { margin-bottom: 24px; }
        .section-hdr { margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid var(--gray-20); }
        .section-hdr h2 { font-size: clamp(14px, 3vw, 16px); font-weight: 700; color: var(--gray-90); display: flex; align-items: center; gap: 7px; }
        .section-hdr h2 i { color: var(--blue); font-size: 14px; }
        
        .svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
        .svc-card { background: var(--white); border: 1px solid var(--gray-30); border-radius: var(--radius); padding: 14px 12px; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; gap: 6px; position: relative; overflow: hidden; }
        .svc-card:hover { border-color: var(--blue); box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .svc-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--blue); transform: scaleX(0); transition: transform 0.3s; }
        .svc-card:hover::after { transform: scaleX(1); }
        .svc-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
        .svc-icon.blue { background: var(--blue-light); color: var(--blue); } .svc-icon.green { background: var(--green-light); color: var(--green); } .svc-icon.purple { background: #F3E8FF; color: #7B2CBF; } .svc-icon.orange { background: #FFF3E0; color: #E67E22; } .svc-icon.teal { background: #E0F2F1; color: #0B8C7A; } .svc-icon.red { background: var(--red-light); color: var(--red); }
        .svc-card h3 { font-size: 11px; font-weight: 700; color: var(--gray-80); line-height: 1.2; }
        .svc-card p { font-size: 9px; color: var(--gray-60); line-height: 1.3; }
        
        .form-box { background: var(--white); border: 1px solid var(--gray-30); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 16px; box-shadow: var(--shadow-sm); }
        .form-box h3 { font-size: 15px; font-weight: 700; color: var(--gray-90); margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
        .form-box .form-sub { font-size: 10px; color: var(--gray-60); margin-bottom: 14px; }
        .fg { display: flex; flex-direction: column; gap: 3px; margin-bottom: 8px; }
        .fg label { font-size: 9px; font-weight: 700; color: var(--gray-70); text-transform: uppercase; letter-spacing: 0.3px; }
        .fg input, .fg select { padding: 9px 11px; border: 1.5px solid var(--gray-40); border-radius: 6px; font-size: 11px; font-family: 'Inter', sans-serif; transition: all 0.2s; }
        .fg input:focus, .fg select:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 3px rgba(19,81,180,0.06); }
        
        .table-box { background: var(--white); border: 1px solid var(--gray-30); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-sm); }
        .table-top { padding: 12px 14px; border-bottom: 1px solid var(--gray-20); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
        .table-top h2 { font-size: 14px; font-weight: 700; color: var(--gray-90); }
        .filter-chips { display: flex; gap: 4px; flex-wrap: wrap; }
        .chip { padding: 3px 10px; border: 1px solid var(--gray-40); border-radius: 14px; font-size: 9px; font-weight: 500; cursor: pointer; background: var(--white); color: var(--gray-70); transition: all 0.2s; font-family: inherit; white-space: nowrap; }
        .chip:hover { border-color: var(--blue); color: var(--blue); }
        .chip.active { background: var(--blue); color: #fff; border-color: var(--blue); font-weight: 700; }
        .table-wrap { width: 100%; }
        table { width: 100%; border-collapse: collapse; font-size: 10px; display: table; }
        table thead { background: #F8F9FA; }
        table thead th { padding: 8px 10px; font-size: 8px; font-weight: 700; color: var(--gray-70); text-transform: uppercase; letter-spacing: 0.4px; text-align: left; border-bottom: 2px solid var(--gray-30); white-space: nowrap; }
        table tbody td { padding: 8px 10px; border-bottom: 1px solid var(--gray-20); vertical-align: middle; }
        table tbody tr { cursor: pointer; transition: background 0.15s; } table tbody tr:hover { background: #F8FAFF; }
        .code-tag { font-family: 'Courier New', monospace; font-size: 9px; background: #F5F5F5; padding: 2px 7px; border-radius: 3px; white-space: nowrap; }
        .badge { display: inline-flex; align-items: center; gap: 3px; padding: 2px 8px; border-radius: 10px; font-size: 8px; font-weight: 700; white-space: nowrap; }
        .badge.ok { background: var(--green-light); color: var(--green); } .badge.exp { background: var(--red-light); color: var(--red); } .badge.prog { background: #FFF8E1; color: #E67E22; }
        .btn-sm { padding: 4px 10px; border-radius: 12px; font-size: 9px; font-weight: 600; cursor: pointer; border: 1px solid var(--blue); background: var(--white); color: var(--blue); transition: all 0.2s; font-family: inherit; white-space: nowrap; pointer-events: auto; }
        .btn-sm:hover { background: var(--blue); color: #fff; } .btn-sm.primary { background: var(--blue); color: #fff; } .btn-sm.primary:hover { background: var(--blue-hover); }
        
        .docs-cards { display: none; }
        .doc-card-mobile { background: var(--white); border: 1px solid var(--gray-30); border-radius: var(--radius); padding: 12px; cursor: pointer; transition: all 0.2s; margin-bottom: 8px; }
        .doc-card-mobile:hover { border-color: var(--blue); box-shadow: var(--shadow-md); transform: translateY(-1px); }
        .doc-card-mobile .doc-card-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px; }
        .doc-card-mobile .doc-card-header .doc-type { font-size: 11px; font-weight: 700; color: var(--gray-80); flex: 1; }
        .doc-card-mobile .doc-card-info { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 9px; }
        .doc-card-mobile .doc-card-info .info-item .info-label { color: var(--gray-60); font-size: 7px; text-transform: uppercase; font-weight: 700; }
        .doc-card-mobile .doc-card-info .info-item .info-value { color: var(--gray-80); font-weight: 600; }
        .doc-card-mobile .doc-card-action { margin-top: 8px; display: flex; justify-content: flex-end; }
        
        .stats-band { background: var(--blue-dark); color: #fff; border-radius: var(--radius-lg); padding: 20px 16px; margin-bottom: 24px; }
        .stats-band h2 { font-size: 14px; font-weight: 700; color: var(--yellow); margin-bottom: 12px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px; text-align: center; }
        .stat-item .num { font-size: clamp(22px, 5vw, 30px); font-weight: 900; color: var(--yellow); line-height: 1; font-family: 'Courier New', monospace; }
        .stat-item .lbl { font-size: 9px; opacity: 0.8; margin-top: 3px; font-weight: 500; }
        
        .help-box { background: var(--blue-light); border: 1px solid #D1E0FF; border-radius: var(--radius-lg); padding: 16px 14px; }
        .help-box h3 { font-size: 13px; font-weight: 700; color: var(--blue); margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
        .help-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; }
        .help-item { display: flex; gap: 7px; font-size: 9px; color: var(--gray-70); }
        .help-item i { color: var(--blue); font-size: 12px; margin-top: 1px; flex-shrink: 0; }
        .help-item strong { display: block; color: var(--gray-80); font-size: 9px; margin-bottom: 1px; }
        
        .footer { background: var(--blue-dark); color: #fff; margin-top: 32px; }
        .footer .inner { max-width: var(--max-w); margin: 0 auto; padding: 24px 16px; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 16px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .footer-col h4 { font-size: 11px; font-weight: 700; margin-bottom: 8px; color: #fff; }
        .footer-col a { display: block; color: rgba(255,255,255,0.7); text-decoration: none; font-size: 9px; margin-bottom: 4px; transition: color 0.2s; }
        .footer-col a:hover { color: var(--yellow); text-decoration: underline; }
        .footer-bot { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; font-size: 8px; color: rgba(255,255,255,0.5); }
        .footer-logo { font-size: 14px; font-weight: 900; color: #fff; display: flex; align-items: baseline; gap: 0; }
        .footer-logo .fg { color: var(--blue); } .footer-logo .fo { color: var(--yellow); } .footer-logo .fv { color: var(--green); } .footer-logo .fdot { color: rgba(255,255,255,0.5); } .footer-logo .fb { color: var(--blue); } .footer-logo .fr { color: var(--yellow); }
        
        .modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 5000; justify-content: center; align-items: center; padding: 12px; }
        .modal-dialog { background: var(--white); border-radius: var(--radius); max-width: 540px; width: 100%; max-height: 85vh; overflow-y: auto; animation: modalIn 0.25s ease; }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.95) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .modal-hdr { background: var(--blue); color: #fff; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; border-radius: var(--radius) var(--radius) 0 0; position: sticky; top: 0; z-index: 5; }
        .modal-hdr h3 { font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 6px; } .modal-hdr h3 i { color: var(--yellow); }
        .modal-close { background: rgba(255,255,255,0.15); border: none; color: #fff; width: 26px; height: 26px; border-radius: 50%; cursor: pointer; font-size: 12px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .modal-close:hover { background: rgba(255,255,255,0.3); }
        .modal-body { padding: 14px; }
        .result-box { text-align: center; padding: 14px; border-radius: var(--radius); margin-bottom: 12px; }
        .result-box.valid { background: var(--green-light); border: 2px solid var(--green); } .result-box.expired { background: var(--red-light); border: 2px solid var(--red); }
        .result-box .ri { font-size: 36px; margin-bottom: 4px; } .result-box.valid .ri { color: var(--green); } .result-box.expired .ri { color: var(--red); }
        .result-box h4 { font-size: 13px; font-weight: 800; }
        .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 12px; }
        .detail-cell { background: #F8F9FA; padding: 7px 10px; border-radius: 5px; border: 1px solid var(--gray-20); }
        .detail-cell .lbl { font-size: 7px; text-transform: uppercase; color: var(--gray-60); font-weight: 700; letter-spacing: 0.4px; margin-bottom: 2px; }
        .detail-cell .val { font-size: 10px; font-weight: 600; color: var(--gray-80); word-break: break-all; }
        .stamp { background: linear-gradient(135deg, var(--blue), var(--blue-dark)); color: #fff; text-align: center; padding: 12px; border-radius: var(--radius); margin-bottom: 10px; }
        .stamp i { font-size: 18px; color: var(--yellow); display: block; margin-bottom: 3px; } .stamp strong { font-size: 10px; }
        .modal-btns { display: flex; gap: 6px; flex-wrap: wrap; }
        .modal-btns button { flex: 1; min-width: 90px; padding: 9px; border-radius: 6px; font-weight: 700; font-size: 10px; cursor: pointer; font-family: inherit; transition: all 0.2s; }
        .btn-close-m { background: var(--blue); color: #fff; border: none; } .btn-close-m:hover { background: var(--blue-hover); }
        .btn-new-m { background: #fff; color: var(--blue); border: 2px solid var(--blue); } .btn-new-m:hover { background: var(--blue-light); }
        
        .track-bar-wrap { margin-bottom: 12px; }
        .track-bar { background: var(--gray-20); border-radius: 6px; height: 6px; margin-bottom: 3px; overflow: hidden; }
        .track-fill { background: var(--blue); height: 100%; border-radius: 6px; transition: width 0.8s ease; }
        .track-pct { font-size: 9px; color: var(--gray-60); text-align: center; }
        .track-step { display: flex; gap: 8px; padding: 6px 0; border-left: 2px solid var(--gray-30); margin-left: 5px; padding-left: 14px; position: relative; }
        .track-step.done { border-left-color: var(--green); }
        .track-step::before { content: ''; width: 9px; height: 9px; border-radius: 50%; background: var(--gray-30); position: absolute; left: -5.5px; top: 10px; }
        .track-step.done::before { background: var(--green); }
        .track-step .step-info strong { font-size: 10px; display: block; }
        .track-step .step-info .step-date { font-size: 8px; color: var(--gray-60); }
        
        @media (max-width: 768px) {
            table { display: none; } .docs-cards { display: block; }
            .svc-grid { grid-template-columns: 1fr 1fr; }
            .detail-grid { grid-template-columns: 1fr; }
            .search-row { flex-direction: column; } .search-row input { flex: auto; }
            .header .inner { padding: 6px 12px; min-height: 46px; }
            .logo-text { font-size: 16px; } .logo-flag { width: 30px; height: 22px; }
            .btn-out, .btn-solid { font-size: 9px; padding: 5px 10px; }
            .nav-bar a { font-size: 9px; padding: 7px 8px; }
            .search-hero::before { font-size: 60px; }
        }
        @media (max-width: 480px) {
            .svc-grid { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr; }
            .search-hero::before { font-size: 45px; letter-spacing: -2px; }
            .search-hero { min-height: 140px; padding: 16px; }
        }
        /* ========== INSTITUIÇÕES PARCEIRAS ========== */
.parceiros-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}
.parceiro-card {
    background: var(--white);
    border: 2px solid var(--gray-20);
    border-radius: var(--radius);
    padding: 18px 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    min-height: 140px;
}
.parceiro-card:hover {
    border-color: var(--blue);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
}
.parceiro-img {
    width: 70px;
    height: 70px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.parceiro-img img, .parceiro-img svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.parceiro-card h4 {
    font-size: 11px;
    font-weight: 700;
    color: var(--gray-80);
}
.parceiro-card p {
    font-size: 8px;
    color: var(--gray-50);
}

/* Modal de instituição */
.modal-instituicao {
    text-align: center;
}
.modal-instituicao .inst-logo-grande {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin: 0 auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.modal-instituicao .inst-logo-grande img,
.modal-instituicao .inst-logo-grande svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.modal-instituicao h3 {
    font-size: 18px;
    font-weight: 800;
    color: var(--gray-90);
    margin-bottom: 4px;
}
.modal-instituicao .inst-tipo {
    font-size: 10px;
    color: var(--blue);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
}
.modal-instituicao .inst-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    text-align: left;
    margin-top: 12px;
}
.modal-instituicao .inst-info-item {
    background: #F8FAFC;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--gray-20);
}
.modal-instituicao .inst-info-item .lbl {
    font-size: 7px;
    text-transform: uppercase;
    color: var(--gray-60);
    font-weight: 700;
    letter-spacing: 0.4px;
    margin-bottom: 3px;
}
.modal-instituicao .inst-info-item .val {
    font-size: 10px;
    font-weight: 600;
    color: var(--gray-80);
}
.modal-instituicao .inst-desc {
    font-size: 11px;
    color: var(--gray-60);
    line-height: 1.6;
    margin-top: 10px;
    text-align: left;
}
/* Botão Ver Mais */
.ver-mais-container {
    text-align: center;
    padding: 16px 0;
}
.btn-ver-mais {
    padding: 10px 24px;
    background: var(--white);
    color: var(--blue);
    border: 1.5px solid var(--blue);
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}
.btn-ver-mais:hover {
    background: var(--blue-light);
    border-color: var(--blue-dark);
    color: var(--blue-dark);
}
.docs-escondidos {
    display: none;
}
.docs-escondidos.show {
    display: table-row-group;
}
tr.doc-escondida {
    /* Já controlado pelo style.display no JS */
}
/* ========== CABEÇALHO COMPACTO E PROFISSIONAL ========== */
.header .inner {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 6px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    gap: 8px;
}
.header-tagline {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 8px;
    color: var(--gray-50);
    font-weight: 600;
    letter-spacing: 0.3px;
}
.header-tagline i {
    color: var(--green);
    font-size: 7px;
}

/* ========== PARCEIROS - CARDS COM IMAGEM DE FUNDO ========== */
.parceiros-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 10px 4px 16px;
    scroll-snap-type: x mandatory;
}
.parceiros-scroll::-webkit-scrollbar { display: none; }

.parceiro-card-new {
    min-width: 200px;
    max-width: 240px;
    height: 180px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
    scroll-snap-align: start;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    transition: all 0.3s;
    display: flex;
    align-items: flex-end;
}
.parceiro-card-new:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}
.parceiro-card-new .parceiro-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.4s;
}
.parceiro-card-new:hover .parceiro-bg {
    transform: scale(1.08);
}
.parceiro-card-new .parceiro-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%);
    z-index: 1;
}
.parceiro-card-new .parceiro-content {
    position: relative;
    z-index: 2;
    padding: 14px;
    width: 100%;
    color: #fff;
}
.parceiro-card-new .parceiro-content .parceiro-logo-mini {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(255,255,255,0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    overflow: hidden;
}
.parceiro-card-new .parceiro-content .parceiro-logo-mini svg {
    width: 80%;
    height: 80%;
}
.parceiro-card-new .parceiro-content h5 {
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 2px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
.parceiro-card-new .parceiro-content small {
    font-size: 8px;
    opacity: 0.9;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

/* Setas de navegação */
.parceiros-nav {
    display: flex;
    gap: 6px;
    justify-content: center;
    margin-top: -8px;
}
.parceiros-nav button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--white);
    border: 1px solid var(--gray-30);
    cursor: pointer;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    color: var(--gray-70);
    box-shadow: var(--shadow-sm);
}
.parceiros-nav button:hover {
    background: var(--blue);
    color: #fff;
    border-color: var(--blue);
}

/* Responsivo */
@media (max-width: 768px) {
    .header-tagline { display: none; }
    .parceiro-card-new {
        min-width: 160px;
        max-width: 200px;
        height: 150px;
    }
    .parceiro-card-new .parceiro-content { padding: 10px; }
    .parceiro-card-new .parceiro-content h5 { font-size: 10px; }
}
/* Esconde botões do meio no mobile */
@media (max-width: 900px) {
    .header .inner > div:nth-child(2) {
        display: none !important;
    }
}
@media (max-width: 480px) {
    .header .inner {
        padding: 4px 8px;
        gap: 4px;
    }
    .btn-out, .btn-solid {
        font-size: 8px !important;
        padding: 5px 8px !important;
    }
}
/* ========== SEÇÃO DE CONSULTA CRIATIVA ========== */
.search-hero {
    position: relative;
    background: linear-gradient(135deg, #0a1a3a 0%, #0C326F 30%, #1351B4 60%, #1B6DE0 100%);
    border: none;
    border-radius: var(--radius-lg);
    padding: clamp(30px, 5vw, 50px) clamp(20px, 4vw, 40px);
    margin-bottom: 22px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(19,81,180,0.3);
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Partículas animadas */
.search-hero .particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}
.search-hero .particle {
    position: absolute;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
    animation: floatUp 8s infinite;
}
.search-hero .particle:nth-child(1) { width: 8px; height: 8px; left: 10%; animation-delay: 0s; animation-duration: 6s; }
.search-hero .particle:nth-child(2) { width: 6px; height: 6px; left: 25%; animation-delay: 1s; animation-duration: 8s; }
.search-hero .particle:nth-child(3) { width: 10px; height: 10px; left: 40%; animation-delay: 2s; animation-duration: 7s; }
.search-hero .particle:nth-child(4) { width: 5px; height: 5px; left: 55%; animation-delay: 0.5s; animation-duration: 9s; }
.search-hero .particle:nth-child(5) { width: 7px; height: 7px; left: 70%; animation-delay: 1.5s; animation-duration: 6.5s; }
.search-hero .particle:nth-child(6) { width: 9px; height: 9px; left: 85%; animation-delay: 3s; animation-duration: 7.5s; }
.search-hero .particle:nth-child(7) { width: 4px; height: 4px; left: 15%; animation-delay: 2.5s; animation-duration: 5s; }
.search-hero .particle:nth-child(8) { width: 6px; height: 6px; left: 60%; animation-delay: 4s; animation-duration: 8s; }

@keyframes floatUp {
    0% { bottom: -20px; opacity: 0; transform: translateY(0) rotate(0deg); }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { bottom: 110%; opacity: 0; transform: translateY(-20px) rotate(180deg); }
}

/* Ondas no fundo */
.search-hero .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    pointer-events: none;
    z-index: 0;
    opacity: 0.15;
}
.search-hero .wave {
    position: absolute;
    bottom: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%23ffffff' d='M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z'/%3E%3C/svg%3E") repeat-x;
    background-size: 720px 60px;
    animation: waveMove 4s linear infinite;
}
.search-hero .wave:nth-child(2) {
    bottom: 5px;
    opacity: 0.5;
    animation-duration: 6s;
    animation-direction: reverse;
}

@keyframes waveMove {
    0% { transform: translateX(0); }
    100% { transform: translateX(720px); }
}

/* Círculos decorativos */
.search-hero .decor-circle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    border: 1px solid rgba(255,255,255,0.1);
}
.search-hero .decor-circle.c1 { width: 300px; height: 300px; top: -100px; right: -80px; }
.search-hero .decor-circle.c2 { width: 150px; height: 150px; bottom: -40px; left: -50px; border-color: rgba(255,215,0,0.1); }
.search-hero .decor-circle.c3 { width: 80px; height: 80px; top: 20px; left: 30%; border-color: rgba(255,255,255,0.08); }

/* Conteúdo */
.search-hero .search-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 650px;
    text-align: center;
}
.search-hero .search-icon-animated {
    font-size: clamp(40px, 6vw, 56px);
    color: var(--yellow);
    margin-bottom: 10px;
    animation: pulse 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(255,215,0,0.3));
}
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
}
.search-hero h2 {
    font-size: clamp(18px, 3.5vw, 26px);
    font-weight: 800;
    color: #fff;
    margin-bottom: 4px;
    letter-spacing: -0.5px;
}
.search-hero .sub {
    font-size: clamp(10px, 1.5vw, 12px);
    color: rgba(255,255,255,0.7);
    margin-bottom: 18px;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
}
.search-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,0.08);
    padding: 5px;
    border-radius: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.12);
    max-width: 550px;
    margin: 0 auto;
}
.search-row input {
    flex: 1;
    min-width: 200px;
    padding: 13px 18px;
    border: none;
    border-radius: 25px;
    font-size: 13px;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.5px;
    transition: all 0.3s;
    background: rgba(255,255,255,0.95);
    color: var(--gray-80);
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    height: 44px;
}
.search-row input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255,215,0,0.25);
}
.search-row input::placeholder {
    font-family: 'Inter', sans-serif;
    letter-spacing: 0;
    color: #aaa;
    font-size: 12px;
}
.search-row .btn-solid {
    padding: 0 20px;
    height: 44px;
    border-radius: 25px;
    font-size: 12px;
    flex-shrink: 0;
    font-weight: 700;
    box-shadow: 0 3px 12px rgba(255,215,0,0.35);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 6px;
}
.search-row .btn-solid:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255,215,0,0.5);
}
.search-row .btn-out {
    padding: 0 14px;
    height: 44px;
    border-radius: 25px;
    font-size: 12px;
    flex-shrink: 0;
    border: 1.5px solid rgba(255,255,255,0.4);
    color: #fff;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.05);
}
.search-row .btn-out:hover {
    background: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.7);
    color: #fff;
}

/* Ajuste para mobile */
@media (max-width: 600px) {
    .search-row {
        flex-direction: column;
        background: transparent;
        padding: 0;
        border: none;
        backdrop-filter: none;
        gap: 6px;
    }
    .search-row input {
        width: 100%;
        border-radius: 25px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .search-row .btn-solid {
        width: 100%;
        justify-content: center;
    }
    .search-row .btn-out {
        width: 100%;
        justify-content: center;
        border-color: rgba(255,255,255,0.3);
    }
}

/* Stats em baixo */
.search-stats {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 16px;
    flex-wrap: wrap;
}
.search-stats .search-stat-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 9px;
    color: rgba(255,255,255,0.6);
}
.search-stats .search-stat-item i {
    color: var(--yellow);
    font-size: 10px;
}
.search-stats .search-stat-item strong {
    color: #fff;
}

@media (max-width: 600px) {
    .search-row {
        flex-direction: column;
        background: transparent;
        padding: 0;
        border: none;
        backdrop-filter: none;
    }
    .search-row input {
        border-radius: 25px;
    }
    .search-row .btn-out {
        border-color: rgba(255,255,255,0.3);
    }
}
/* ========== FUNDO DA PÁGINA - PALÁCIO DO PLANALTO ========== */
body::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -2;
    background: 
        linear-gradient(180deg, rgba(237,237,237,0.90) 0%, rgba(237,237,237,0.85) 100%),
        url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=60') center/cover no-repeat;
    opacity: 0.35;
}

/* ========== CARDS DE SERVIÇO COM ANIMAÇÃO ========== */
.svc-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}
.svc-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(19,81,180,0.03) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s;
}
.svc-card:hover::before {
    opacity: 1;
}
.svc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(19,81,180,0.12);
}
.svc-card .svc-icon {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.svc-card:hover .svc-icon {
    transform: scale(1.15) rotate(-8deg);
}

/* ========== ESTATÍSTICAS COM FUNDO DO CONGRESSO ========== */
.stats-band {
    position: relative;
    overflow: hidden;
    border: none;
}
.stats-band::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
        linear-gradient(135deg, rgba(12,50,111,0.97) 0%, rgba(19,81,180,0.92) 100%),
        url('https://images.unsplash.com/photo-1489944440616-0c6d8e3cf4c0?w=800&q=60') center/cover no-repeat;
    z-index: 0;
    animation: slowZoom 20s ease-in-out infinite;
}
@keyframes slowZoom {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
.stats-band * { position: relative; z-index: 1; }

/* ========== BASE DE DOCUMENTOS COM FUNDO ========== */
#documentos .table-box {
    position: relative;
    overflow: hidden;
}
#documentos .table-box::after {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 150px;
    height: 150px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%231351B4' opacity='0.04'/%3E%3Ccircle cx='50' cy='50' r='48' fill='none' stroke='%231351B4' stroke-width='2' opacity='0.06'/%3E%3C/svg%3E") center/contain no-repeat;
    pointer-events: none;
    z-index: 0;
}

/* ========== SEÇÃO DE AJUDA COM ÍCONE DO GOVERNO ========== */
.help-box {
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
}
.help-box::after {
    content: '';
    position: absolute;
    right: -20px;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%231351B4' opacity='0.05'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='%231351B4' opacity='0.08' font-size='20' font-weight='900' font-family='Arial'%3EGOV%3C/text%3E%3C/svg%3E") center/contain no-repeat;
    pointer-events: none;
    transition: all 0.5s;
}
.help-box:hover::after {
    transform: scale(1.1) rotate(5deg);
}

/* ========== ANIMAÇÃO NOS ITENS DE AJUDA ========== */
.help-item {
    transition: all 0.3s;
    padding: 8px;
    border-radius: 8px;
}
.help-item:hover {
    background: rgba(255,255,255,0.6);
    transform: translateX(4px);
}
.help-item i {
    transition: all 0.3s;
}
.help-item:hover i {
    transform: scale(1.2);
}

/* ========== EXEMPLOS DE DOCUMENTOS COM BORDA ANIMADA ========== */
#secaoExemplos .svc-card {
    border: 2px dashed var(--gray-30);
    animation: borderGlow 3s ease-in-out infinite;
}
@keyframes borderGlow {
    0%, 100% { border-color: var(--gray-30); }
    50% { border-color: var(--blue); }
}

/* ========== BREADCRUMB COM ANIMAÇÃO ========== */
.breadcrumb a {
    position: relative;
}
.breadcrumb a::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--blue);
    transition: width 0.3s;
}
.breadcrumb a:hover::after {
    width: 100%;
}

/* ========== TÍTULO DA PÁGINA COM EFEITO ========== */
.page-title h1 {
    background: linear-gradient(135deg, var(--gray-90) 0%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
/* ========== TÍTULO DA PÁGINA COM FUNDO DO GOVERNO ========== */
.page-title {
    position: relative;
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 28px 24px;
    margin-bottom: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-20);
}
.page-title::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: 
        linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.95) 100%),
        url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=60') right center/cover no-repeat;
    z-index: 0;
    opacity: 0.6;
}
.page-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--blue), var(--yellow), var(--green));
    z-index: 1;
}
.page-title h1 {
    position: relative;
    z-index: 1;
    font-size: clamp(20px, 4vw, 28px);
    font-weight: 900;
    color: var(--gray-90);
    margin-bottom: 4px;
    letter-spacing: -0.5px;
    line-height: 1.2;
}
.page-title p {
    position: relative;
    z-index: 1;
    font-size: clamp(11px, 2vw, 13px);
    color: var(--gray-60);
    max-width: 550px;
}

/* Ícone decorativo no título */
.page-title .title-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 60px;
    color: rgba(19,81,180,0.06);
    z-index: 0;
    pointer-events: none;
}

/* Animação na barra inferior */
@keyframes barraAnimada {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
.page-title::after {
    background: linear-gradient(90deg, var(--blue), var(--yellow), var(--green), var(--blue));
    background-size: 200% 100%;
    animation: barraAnimada 4s ease infinite;
}

/* Responsivo */
@media (max-width: 600px) {
    .page-title::before {
        width: 100%;
        opacity: 0.3;
    }
    .page-title {
        padding: 20px 16px;
    }
    .page-title p {
        max-width: 100%;
    }
}
/* ========== ANIMAÇÃO: VALIDE SEUS DOCUMENTOS ========== */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}
@keyframes blink {
    0%, 100% { border-color: transparent; }
    50% { border-color: var(--yellow); }
}
@keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
    50% { box-shadow: 0 0 40px rgba(255,215,0,0.6); }
}
@keyframes floatIcon {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Título animado */
.consulta-hero h2 {
    animation: fadeInUp 0.8s ease-out;
}
.consulta-hero .consulta-sub {
    animation: fadeInUp 0.8s ease-out 0.2s both;
}
.consulta-hero .consulta-icon {
    animation: floatIcon 3s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
}
.consulta-hero .consulta-row {
    animation: fadeInUp 0.8s ease-out 0.4s both;
}
.consulta-hero .consulta-stats {
    animation: fadeInUp 0.8s ease-out 0.6s both;
}

/* ========== ANIMAÇÃO: SERVIÇOS DISPONÍVEIS ========== */
.svc-card {
    animation: fadeInUp 0.6s ease-out both;
}
.svc-card:nth-child(1) { animation-delay: 0.1s; }
.svc-card:nth-child(2) { animation-delay: 0.2s; }
.svc-card:nth-child(3) { animation-delay: 0.3s; }
.svc-card:nth-child(4) { animation-delay: 0.4s; }
.svc-card:nth-child(5) { animation-delay: 0.5s; }
.svc-card:nth-child(6) { animation-delay: 0.6s; }

/* Efeito de brilho ao passar o mouse */
.svc-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
}
.svc-card:hover::before {
    left: 100%;
}

/* Ícone pulsando */
@keyframes iconBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}
.svc-card:hover .svc-icon {
    animation: iconBounce 0.6s ease;
}

/* ========== ANIMAÇÃO: BASE NACIONAL DE DOCUMENTOS ========== */
@keyframes slideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes counterUp {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Título da seção */
#documentos .section-hdr h2 i {
    animation: iconBounce 2s ease-in-out infinite;
}

/* Cards de filtro */
.chip {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.chip:hover {
    transform: scale(1.08);
}
.chip.active {
    animation: glowPulse 2s ease-in-out infinite;
}

/* Linhas da tabela */
#docsTableBody tr {
    animation: slideInRight 0.5s ease-out both;
}
#docsTableBody tr:nth-child(1) { animation-delay: 0.05s; }
#docsTableBody tr:nth-child(2) { animation-delay: 0.1s; }
#docsTableBody tr:nth-child(3) { animation-delay: 0.15s; }
#docsTableBody tr:nth-child(4) { animation-delay: 0.2s; }
#docsTableBody tr:nth-child(5) { animation-delay: 0.25s; }
#docsTableBody tr:nth-child(6) { animation-delay: 0.3s; }

/* Efeito de hover nas linhas */
#docsTableBody tr {
    transition: all 0.3s ease;
}
#docsTableBody tr:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 15px rgba(19,81,180,0.1);
}

/* Badge de status pulsando */
.badge.prog {
    animation: glowPulse 2s ease-in-out infinite;
}

/* Botão Ver Mais */
.btn-ver-mais {
    transition: all 0.3s ease;
}
.btn-ver-mais:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(19,81,180,0.2);
}
.btn-ver-mais i {
    transition: transform 0.3s ease;
}
.btn-ver-mais:hover i {
    transform: translateY(3px);
}

/* ========== ANIMAÇÃO: TÍTULO DA PÁGINA ========== */
.page-title h1 {
    background: linear-gradient(135deg, var(--blue), #7B2CBF, var(--blue));
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.page-title {
    animation: fadeInUp 0.6s ease-out;
}

/* ========== ANIMAÇÃO: BREADCRUMB ========== */
.breadcrumb {
    animation: fadeInUp 0.4s ease-out;
}

/* ========== ANIMAÇÃO: ESTATÍSTICAS ========== */
.stat-item .num {
    animation: counterUp 1s ease-out;
}
.stats-band {
    animation: fadeInUp 0.6s ease-out;
}

/* ========== ANIMAÇÃO: SEÇÃO DE AJUDA ========== */
.help-item {
    animation: fadeInUp 0.5s ease-out both;
}
.help-item:nth-child(1) { animation-delay: 0.1s; }
.help-item:nth-child(2) { animation-delay: 0.2s; }
.help-item:nth-child(3) { animation-delay: 0.3s; }
.help-item:nth-child(4) { animation-delay: 0.4s; }

/* ========== ANIMAÇÃO: FOOTER ========== */
.footer-col {
    animation: fadeInUp 0.5s ease-out both;
}
.footer-col:nth-child(1) { animation-delay: 0.1s; }
.footer-col:nth-child(2) { animation-delay: 0.2s; }
.footer-col:nth-child(3) { animation-delay: 0.3s; }
.footer-col:nth-child(4) { animation-delay: 0.4s; }
/* ========== SEÇÃO DE SERVIÇOS - DESIGN PREMIUM ========== */
#servicos {
    position: relative;
    background: linear-gradient(135deg, #f8faff 0%, #e8f0fe 30%, #f0f4ff 60%, #e8f0fe 100%);
    border-radius: var(--radius-lg);
    padding: 28px 24px;
    margin-bottom: 24px;
    overflow: hidden;
    border: 1px solid #d1e0ff;
    box-shadow: 
        0 4px 20px rgba(19,81,180,0.06),
        inset 0 1px 0 rgba(255,255,255,0.8);
}

/* Padrão de fundo com ícones */
#servicos::before {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 200px;
    height: 200px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='none' stroke='%231351B4' stroke-width='1' opacity='0.06'/%3E%3Ccircle cx='100' cy='100' r='70' fill='none' stroke='%231351B4' stroke-width='1' opacity='0.04'/%3E%3Ccircle cx='100' cy='100' r='45' fill='none' stroke='%231351B4' stroke-width='1' opacity='0.05'/%3E%3Ccircle cx='100' cy='100' r='20' fill='%231351B4' opacity='0.03'/%3E%3C/svg%3E") center/contain no-repeat;
    pointer-events: none;
    z-index: 0;
}

/* Linha decorativa no topo */
#servicos::after {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 3px;
    background: linear-gradient(90deg, var(--blue), var(--yellow), var(--green));
    border-radius: 0 0 3px 3px;
    z-index: 1;
}

/* Título da seção */
#servicos .section-hdr {
    position: relative;
    z-index: 1;
    border-bottom: none;
    margin-bottom: 18px;
    padding-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#servicos .section-hdr h2 {
    font-size: clamp(15px, 3vw, 18px);
    font-weight: 800;
    color: var(--gray-90);
    display: flex;
    align-items: center;
    gap: 10px;
}

#servicos .section-hdr h2 i {
    width: 38px;
    height: 38px;
    background: linear-gradient(135deg, var(--blue), #1B6DE0);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--yellow) !important;
    font-size: 16px;
    box-shadow: 0 3px 10px rgba(19,81,180,0.2);
}

/* Subtítulo */
#servicos .section-hdr + p {
    position: relative;
    z-index: 1;
    font-size: 10px;
    color: var(--gray-50);
    margin-bottom: 16px;
    padding-left: 48px;
}

/* Grid de cards */
#servicos .svc-grid {
    position: relative;
    z-index: 1;
    gap: 10px;
}

/* Cards individuais */
#servicos .svc-card {
    background: var(--white);
    border: 1px solid #e8ecf4;
    border-radius: 14px;
    padding: 18px 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

#servicos .svc-card:hover {
    border-color: var(--blue);
    box-shadow: 0 8px 25px rgba(19,81,180,0.12);
    transform: translateY(-5px);
    background: #fff;
}

#servicos .svc-card .svc-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s;
}

#servicos .svc-card:hover .svc-icon {
    transform: scale(1.1) rotate(-5deg);
}

#servicos .svc-card h3 {
    font-size: 12px;
    font-weight: 700;
}

#servicos .svc-card p {
    font-size: 9px;
    color: var(--gray-50);
}

/* Badge "Novo" nos cards */
#servicos .svc-card .badge-novo {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--green);
    color: #fff;
    font-size: 7px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Animação de entrada dos cards */
#servicos .svc-card {
    animation: fadeInUp 0.5s ease-out both;
}
#servicos .svc-card:nth-child(1) { animation-delay: 0.05s; }
#servicos .svc-card:nth-child(2) { animation-delay: 0.1s; }
#servicos .svc-card:nth-child(3) { animation-delay: 0.15s; }
#servicos .svc-card:nth-child(4) { animation-delay: 0.2s; }
#servicos .svc-card:nth-child(5) { animation-delay: 0.25s; }
#servicos .svc-card:nth-child(6) { animation-delay: 0.3s; }
/* ========== IMAGENS DE FUNDO NOS CARDS DE SERVIÇO ========== */
#servicos .svc-card {
    position: relative;
    overflow: hidden;
}
#servicos .svc-card::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: all 0.4s ease;
    opacity: 0.4;
}
#servicos .svc-card:hover::before {
    opacity: 0.7;
}

/* Card 1 - Certificados e Diplomas (formatura) */
.card-educacao::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.90) 100%),
        url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKw-7Gqn3jDYNV-TUOGddbaZCENE5dN-stual3-ZqapWZee1iIctoiSFI&s=10') center/cover no-repeat;
}

/* Card 2 - Atestados Médicos (saúde) */
.card-saude::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.90) 100%),
        url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=350&fit=crop') center/cover no-repeat;
}

/* Card 3 - Documentos Pessoais (identidade) */
.card-pessoais::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.90) 100%),
        url('https://www.gov.br/inss/pt-br/noticias/fique-atento-a-documentacao-pessoal-e-profissional/documentos.jpeg/@@images/400412ee-1c02-4d21-8451-2493de92b3aa.jpeg') center/cover no-repeat;
}

/* Card 4 - Documentos Jurídicos (justiça) */
.card-juridico::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.90) 100%),
        url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=350&fit=crop') center/cover no-repeat;
}

/* Card 5 - Cursos e Qualificações (escritório) */
.card-cursos::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.90) 100%),
        url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=350&fit=crop') center/cover no-repeat;
}

/* Card 6 - Consulta por Código (tecnologia) */
.card-consulta::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.90) 100%),
        url('https://me-qr.com/static/pages/qr-code-for-image-img/image-qr-code.webp') center/cover no-repeat;
}

/* Conteúdo acima da imagem */
#servicos .svc-card .svc-icon,
#servicos .svc-card h3,
#servicos .svc-card p {
    position: relative;
    z-index: 1;
}
/* ========== SEÇÃO DE PARCEIROS - DESIGN PREMIUM ========== */
#parceiros {
    position: relative;
    background: linear-gradient(135deg, #fafafa 0%, #f5f0ff 30%, #faf5ff 60%, #f8f4ff 100%);
    border-radius: var(--radius-lg);
    padding: 28px 24px;
    margin-bottom: 24px;
    overflow: hidden;
    border: 1px solid #e8dfff;
    box-shadow: 
        0 4px 20px rgba(123,44,191,0.06),
        inset 0 1px 0 rgba(255,255,255,0.8);
}

/* Padrão de fundo com círculos decorativos */
#parceiros::before {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 250px;
    height: 250px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 250'%3E%3Ccircle cx='125' cy='125' r='120' fill='none' stroke='%237B2CBF' stroke-width='1' opacity='0.06'/%3E%3Ccircle cx='125' cy='125' r='90' fill='none' stroke='%237B2CBF' stroke-width='1' opacity='0.05'/%3E%3Ccircle cx='125' cy='125' r='60' fill='none' stroke='%237B2CBF' stroke-width='1' opacity='0.04'/%3E%3Ccircle cx='125' cy='125' r='30' fill='%237B2CBF' opacity='0.03'/%3E%3Ctext x='125' y='130' text-anchor='middle' fill='%237B2CBF' opacity='0.06' font-size='20' font-weight='900' font-family='Arial'%3E🤝%3C/text%3E%3C/svg%3E") center/contain no-repeat;
    pointer-events: none;
    z-index: 0;
}

/* Linha decorativa no topo */
#parceiros::after {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 3px;
    background: linear-gradient(90deg, #7B2CBF, #9B59B6, #F28C28, #7B2CBF);
    border-radius: 0 0 3px 3px;
    background-size: 200% 100%;
    animation: barraAnimada 4s ease infinite;
    z-index: 1;
}

/* Título da seção */
#parceiros .section-hdr {
    position: relative;
    z-index: 1;
    border-bottom: none;
    margin-bottom: 10px;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

#parceiros .section-hdr h2 {
    font-size: clamp(15px, 3vw, 18px);
    font-weight: 800;
    color: var(--gray-90);
    display: flex;
    align-items: center;
    gap: 10px;
}

#parceiros .section-hdr h2 i {
    width: 38px;
    height: 38px;
    background: linear-gradient(135deg, #7B2CBF, #9B59B6);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--yellow) !important;
    font-size: 16px;
    box-shadow: 0 3px 10px rgba(123,44,191,0.25);
}

/* Subtítulo */
#parceiros .section-hdr + p {
    position: relative;
    z-index: 1;
}

/* Setas de navegação estilizadas */
#parceiros .parceiros-nav {
    position: relative;
    z-index: 1;
}
#parceiros .parceiros-nav button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e8dfff;
    cursor: pointer;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    color: #7B2CBF;
    box-shadow: 0 2px 8px rgba(123,44,191,0.08);
}
#parceiros .parceiros-nav button:hover {
    background: #7B2CBF;
    color: #fff;
    border-color: #7B2CBF;
    box-shadow: 0 4px 12px rgba(123,44,191,0.2);
}

/* Carrossel */
#parceiros .parceiros-scroll {
    position: relative;
    z-index: 1;
}

/* Animação de entrada */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
#parceiros {
    animation: fadeInUp 0.6s ease-out;
}
/* ========== TÍTULO PREMIUM - FONTE PLAYFAIR DISPLAY ========== */
.page-title h1 {
    font-family: 'Playfair Display', 'DM Serif Display', 'Georgia', serif;
    font-size: clamp(26px, 5.5vw, 40px);
    font-weight: 900;
    font-style: italic;
    letter-spacing: -0.5px;
    line-height: 1.1;
    background: linear-gradient(135deg, #0a1a3a 0%, #1351B4 25%, #1B6DE0 50%, #0C326F 75%, #1351B4 100%);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: titleShine 5s ease infinite;
    filter: drop-shadow(0 2px 6px rgba(19,81,180,0.12));
    position: relative;
    display: inline-block;
}

/* Underline dourado elegante */
.page-title h1::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, var(--yellow), #FFA500, var(--yellow));
    border-radius: 3px;
    animation: underlinePulse 3.5s ease-in-out infinite;
}

@keyframes titleShine {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes underlinePulse {
    0%, 100% { width: 100px; opacity: 0.7; }
    50% { width: 100%; opacity: 1; }
}

/* Responsivo */
@media (max-width: 600px) {
    .page-title h1 {
        font-size: clamp(22px, 7vw, 30px);
    }
}
/* Centralizar título da página */
.page-title {
    text-align: center !important;
}
.page-title h1 {
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
}
.page-title h1::after {
    left: 50% !important;
    transform: translateX(-50%) !important;
}
.page-title p {
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 100% !important;
}
.page-title .title-icon {
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
}

/* Ajuste da animação da barra inferior */
@keyframes underlinePulse {
    0%, 100% { 
        width: 100px; 
        opacity: 0.7;
        left: 50%;
        transform: translateX(-50%);
    }
    50% { 
        width: 80%; 
        opacity: 1;
        left: 50%;
        transform: translateX(-50%);
    }
}
/* ========== CARDS DE SERVIÇO - ÍCONE E NOME NA MESMA LINHA ========== */
#servicos .svc-card {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 12px !important;
    padding: 16px 18px !important;
}

#servicos .svc-card .svc-icon {
    flex-shrink: 0;
    margin-bottom: 0 !important;
}

#servicos .svc-card .svc-card-content {
    flex: 1;
    min-width: 0;
}

#servicos .svc-card h3 {
    margin-bottom: 2px !important;
}

#servicos .svc-card p {
    margin: 0 !important;
}

/* Ajuste nas imagens de fundo */
#servicos .svc-card::before {
    opacity: 0.25 !important;
}

#servicos .svc-card:hover::before {
    opacity: 0.5 !important;
}

/* Responsivo */
@media (max-width: 480px) {
    #servicos .svc-card {
        gap: 10px !important;
        padding: 14px 12px !important;
    }
}
/* Estilo para detalhes extras dentro do modal */
.detail-cell-2 {
    display: inline-block;
    width: 48%;
    margin-bottom: 6px;
    margin-right: 2%;
}
.detail-cell-2 .lbl {
    font-size: 7px;
    text-transform: uppercase;
    color: #999;
    font-weight: 700;
}
.detail-cell-2 .val {
    font-size: 10px;
    font-weight: 600;
    color: #333;
}
/* ========== IMAGENS DE FUNDO NOS CARDS DE SERVIÇO - MAIS SUAVE ========== */
#servicos .svc-card::before {
    opacity: 0.50 !important;
    transition: all 0.4s ease;
}

#servicos .svc-card:hover::before {
    opacity: 0.70 !important;
    transform: scale(1.03);
}

/* Ajuste do gradiente */
.card-educacao::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.80) 100%),
        url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKw-7Gqn3jDYNV-TUOGddbaZCENE5dN-stual3-ZqapWZee1iIctoiSFI&s=10') center/cover no-repeat !important;
}

.card-saude::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.80) 100%),
        url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=350&fit=crop') center/cover no-repeat !important;
}

.card-pessoais::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.80) 100%),
        url('https://www.gov.br/inss/pt-br/noticias/fique-atento-a-documentacao-pessoal-e-profissional/documentos.jpeg/@@images/400412ee-1c02-4d21-8451-2493de92b3aa.jpeg') center/cover no-repeat !important;
}

.card-juridico::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.80) 100%),
        url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=350&fit=crop') center/cover no-repeat !important;
}

.card-cursos::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.80) 100%),
        url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=350&fit=crop') center/cover no-repeat !important;
}

.card-consulta::before {
    background: 
        linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.80) 100%),
        url('https://me-qr.com/static/pages/qr-code-for-image-img/image-qr-code.webp') center/cover no-repeat !important;
}

#servicos .svc-card .svc-icon,
#servicos .svc-card h3,
#servicos .svc-card p,
#servicos .svc-card .svc-card-content {
    position: relative;
    z-index: 2;
}

#servicos .svc-card h3 {
    text-shadow: 0 1px 2px rgba(255,255,255,0.6);
    font-weight: 700;
}

#servicos .svc-card p {
    text-shadow: 0 1px 1px rgba(255,255,255,0.5);
}
/* ========== TÍTULO E SUBTÍTULO DOS CARDS DE SERVIÇO ========== */
#servicos .svc-card h3 {
    font-size: 15px !important; /* Bem maior */
    font-weight: 800 !important;
    text-shadow: 0 1px 3px rgba(255,255,255,0.8);
    margin-bottom: 4px !important;
    color: #0a0a0a !important; /* Quase preto */
}

#servicos .svc-card p {
    font-size: 11px !important; /* Maior */
    font-weight: 500 !important; /* Mais visível */
    text-shadow: 0 1px 2px rgba(255,255,255,0.7);
    color: #1a1a1a !important; /* Escuro para melhor leitura */
    line-height: 1.4 !important;
}
/* ========== SELO GOV.BR COM CORES DA LOGO ========== */
.stamp-govbr {
    background: #fff;
    text-align: center;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 12px;
    border: 2px solid #E5E7EB;
    position: relative;
    overflow: hidden;
}

.stamp-govbr::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1351B4 33%, #FFD700 33%, #FFD700 66%, #0F7B3A 66%);
}

.stamp-govbr-content {
    position: relative;
    z-index: 1;
}

.stamp-govbr .govbr-logo {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 1;
    margin-bottom: 2px;
}

.stamp-govbr .govbr-logo .g { color: #1351B4; }
.stamp-govbr .govbr-logo .o { color: #FFD700; }
.stamp-govbr .govbr-logo .v { color: #0F7B3A; }
.stamp-govbr .govbr-logo .dot { color: #999; font-weight: 500; }
.stamp-govbr .govbr-logo .b { color: #1351B4; }
.stamp-govbr .govbr-logo .r { color: #FFD700; }

.stamp-govbr .stamp-label {
    font-size: 7px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    margin-top: 2px;
}
/* ========== CORREÇÃO PARA CÓDIGOS GRANDES ========== */
.code-tag {
    font-family: 'Courier New', monospace;
    font-size: 9px;
    background: #F5F5F5;
    padding: 2px 7px;
    border-radius: 3px;
    white-space: normal !important; /* Permite quebra de linha */
    word-break: break-all !important; /* Quebra em qualquer caractere */
    overflow-wrap: break-word !important;
    display: inline-block;
    max-width: 100%;
}

/* Código no modal */
.detail-cell .val {
    font-size: 10px;
    font-weight: 600;
    color: var(--gray-80);
    word-break: break-all !important; /* Já tem, mas reforçar */
    overflow-wrap: break-word !important;
}


/* Código no QR Code */
#qrCodeContainer + p,
[id*="qrCode"] + p {
    word-break: break-all !important;
    overflow-wrap: break-word !important;
    max-width: 100%;
    font-size: 6px;
    line-height: 1.3;
}

/* Código no título do documento */
.doc-code {
    font-family: 'Courier New', monospace;
    font-size: 9px;
    background: #F1F5F9;
    color: var(--blue);
    padding: 3px 7px;
    border-radius: 4px;
    font-weight: 600;
    white-space: normal !important;
    word-break: break-all !important;
    overflow-wrap: break-word !important;
    max-width: 100%;
    display: inline-block;
}

/* Código na tabela */
table td .code-tag {
    white-space: normal !important;
    word-break: break-all !important;
    max-width: 150px;
    display: inline-block;
}

/* Código no modal de validação */
.modal-body .code-tag,
#modalContent .code-tag {
    font-size: 9px;
    white-space: normal !important;
    word-break: break-all !important;
    overflow-wrap: break-word !important;
    max-width: 100%;
}

/* Código no card mobile */
.doc-card-mobile .code-tag {
    white-space: normal !important;
    word-break: break-all !important;
    max-width: 100%;
}
    </style>
</head>
<body>

<a href="#conteudo" class="skip-link">Ir para o conteúdo</a>

<div class="topbar">
    <div class="inner">
        <div class="links">
            <a href="#">Início</a><span class="sep">|</span>
            <a href="#">Serviços</a><span class="sep">|</span>
            <a href="#">Órgãos do Governo</a><span class="sep">|</span>
            <a href="#">Acesso à Informação</a><span class="sep">|</span>
            <a href="#">Legislação</a><span class="sep">|</span>
            <a href="#">Acessibilidade</a>
            
            <!-- BOTÕES DE ACESSIBILIDADE AO LADO -->
            <span style="display:inline-flex;align-items:center;gap:3px;margin-left:4px;">
                <button onclick="ajustarFonte(-1)" style="background:none;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:2px 6px;font-size:9px;cursor:pointer;border-radius:3px;font-family:inherit;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='none'">A−</button>
                <button onclick="ajustarFonte(1)" style="background:none;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:2px 6px;font-size:9px;cursor:pointer;border-radius:3px;font-family:inherit;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='none'">A+</button>
                <button onclick="toggleContraste()" style="background:none;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);padding:2px 6px;font-size:9px;cursor:pointer;border-radius:3px;font-family:inherit;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='none'">◐</button>
            </span>
        </div>
        
        <!-- ESPAÇO PREENCHIDO COM INFORMAÇÕES ÚTEIS -->
        <div class="topbar-info" style="display:flex;align-items:center;gap:12px;font-size:9px;">
            <span style="display:flex;align-items:center;gap:4px;color:rgba(255,255,255,0.7);">
                <i class="fas fa-shield-alt" style="color:#FFD700;font-size:9px;"></i>
                <span>Site Oficial</span>
            </span>
            <span style="color:rgba(255,255,255,0.3);">|</span>
            <span style="display:flex;align-items:center;gap:4px;color:rgba(255,255,255,0.7);">
                <i class="fas fa-lock" style="color:#22C55E;font-size:9px;"></i>
                <span>Conexão Segura</span>
            </span>
            <span style="color:rgba(255,255,255,0.3);">|</span>
            <span style="display:flex;align-items:center;gap:4px;color:rgba(255,255,255,0.7);">
                <i class="fas fa-check-circle" style="color:#22C55E;font-size:9px;"></i>
                <span>Documentos Autenticados</span>
            </span>
        </div>
    </div>
</div>

<header class="header"><div class="inner">
<a href="#" class="logo-link">
    <div class="logo-flag">
        <img src="https://www.gov.br/governodigital/++theme++padrao_govbr/favicons/apple-touch-icon.png" 
             alt="GOV.BR" 
             style="width:100%;height:100%;object-fit:contain;">
    </div>
    <div>
        <div class="logo-text">
            <span class="g">G</span><span class="o">O</span><span class="v">V</span><span class="dot">.</span><span class="b">B</span><span class="r">R</span>
        </div>
        <div class="logo-sub">Serviços e Informações do Brasil</div>
    </div>
</a>

    
    <!-- BOTÕES DO MEIO - PREENCHE O ESPAÇO -->
    <div style="display:flex;gap:6px;align-items:center;flex:1;justify-content:center;flex-wrap:wrap;">
        <a href="#parceiros" class="btn-out" style="font-size:9px;padding:6px 12px;">
            <i class="fas fa-handshake"></i> Instituições Parceiras
        </a>
        <a href="#servicos" class="btn-out" style="font-size:9px;padding:6px 12px;">
            <i class="fas fa-star"></i> Serviços
        </a>
        <a href="#documentos" class="btn-out" style="font-size:9px;padding:6px 12px;">
            <i class="fas fa-database"></i> Base de Documentos
        </a>
    </div>
    
    <!-- BOTÕES DA DIREITA -->
    <div class="header-actions">
        <a href="#consultar" class="btn-out"><i class="fas fa-search"></i> Consultar</a>
        <button class="btn-solid gold" onclick="irParaConsulta()"><i class="fas fa-shield-alt"></i> Validar Agora</button>
    </div>
</div></header>

<nav class="nav-bar"><div class="inner">
    <a href="#servicos" class="active" data-target="servicos">Serviços</a>
    <a href="#documentos" data-target="documentos">Base de Documentos</a>
    <a href="#parceiros" data-target="parceiros">Instituições Parceiras</a>
    <a href="#ajuda" data-target="ajuda">Ajuda</a>
</div></nav>
<main class="main" id="conteudo">
    
    <nav class="breadcrumb"><a href="#">Início</a><span class="arr">›</span><a href="#">Serviços</a><span class="arr">›</span><span class="cur">Validação de Documentos</span></nav>
    
<div class="page-title">
    <div class="title-icon"><i class="fas fa-landmark"></i></div>
    <h1>Validação Oficial de Documentos</h1>
    <p>Sistema integrado ao GOV.BR para consulta, verificação de autenticidade de documentos oficiais com rastreamento em tempo real.</p>
</div>
    
<!-- BUSCA -->
<div class="search-hero" id="consultar">
    <!-- Partículas -->
    <div class="particles">
        <div class="particle"></div><div class="particle"></div><div class="particle"></div>
        <div class="particle"></div><div class="particle"></div><div class="particle"></div>
        <div class="particle"></div><div class="particle"></div>
    </div>
    <!-- Ondas -->
    <div class="waves">
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
    <!-- Círculos decorativos -->
    <div class="decor-circle c1"></div>
    <div class="decor-circle c2"></div>
    <div class="decor-circle c3"></div>
    
<div class="search-content">
    <!-- SELO CREDENCIADO GOVERNO FEDERAL -->
    <div style="display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg, rgba(0,156,59,0.2), rgba(0,39,118,0.2));padding:8px 20px;border-radius:30px;margin-bottom:14px;border:1.5px solid rgba(255,215,0,0.3);backdrop-filter:blur(10px);">
        <div style="display:flex;align-items:center;gap:5px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#009c3b;box-shadow:0 0 8px rgba(0,156,59,0.5);"></span>
            <span style="width:8px;height:8px;border-radius:50%;background:#FFD700;box-shadow:0 0 8px rgba(255,215,0,0.5);"></span>
            <span style="width:8px;height:8px;border-radius:50%;background:#002776;box-shadow:0 0 8px rgba(0,39,118,0.5);"></span>
        </div>
        <div style="text-align:left;">
            <span style="font-size:10px;color:#FFD700;font-weight:800;letter-spacing:1px;text-transform:uppercase;text-shadow:0 1px 3px rgba(0,0,0,0.3);">
                <i class="fas fa-shield-haltered" style="margin-right:4px;"></i>Sistema Credenciado
            </span>
            <span style="font-size:8px;color:rgba(255,255,255,0.7);display:block;letter-spacing:0.5px;">Governo Federal do Brasil • Oficial</span>
        </div>
        <i class="fas fa-check-circle" style="color:#22C55E;font-size:14px;filter:drop-shadow(0 0 4px rgba(34,197,94,0.5));"></i>
    </div>
    
    <!-- ÍCONE E TÍTULO -->
    <div style="margin-top:8px;">
        <div class="search-icon-animated">
            <i class="fas fa-shield-haltered"></i>
        </div>
        <h2>Valide seu Documento em Segundos</h2>
        <p class="sub">Digite o código de autenticação e verifique a autenticidade instantaneamente</p>
    </div> <div class="search-row">
            <input type="text" id="codigoInput" placeholder="🔍 Digite o código do documento..." aria-label="Código do documento">
            <button class="btn-solid gold" onclick="consultarDocumento()"><i class="fas fa-shield-check"></i> Validar</button>
            <button class="btn-out" onclick=mostrarInfo()"><i class="fas fa-question-circle"></i></button>
        </div>
        <div class="search-stats">
            <span class="search-stat-item"><i class="fas fa-check-circle"></i> <strong>+5milhões</strong> documentos validados</span>
            <span class="search-stat-item"><i class="fas fa-lock"></i> <strong>100%</strong> seguro</span>
            <span class="search-stat-item"><i class="fas fa-bolt"></i> <strong>Instantâneo</strong></span>
        </div>
    </div>
</div>
<!-- SERVIÇOS -->
<div class="section" id="servicos">
    <div class="section-hdr"><h2><i class="fas fa-star"></i> Serviços Disponíveis</h2></div>
    <p style="font-size:10px;color:var(--gray-60);margin-bottom:10px;">Clique em um serviço para ver exemplos de documentos disponíveis para validação.</p>
<div class="svc-grid">
    <div class="svc-card card-educacao" onclick="mostrarExemplos('Educação')">
        <div class="svc-icon blue"><i class="fas fa-graduation-cap"></i></div>
        <div class="svc-card-content">
            <h3>Certificados e Diplomas</h3>
            <p>Ensino Fundamental, Médio, Técnico e Superior</p>
        </div>
    </div>
    <div class="svc-card card-saude" onclick="mostrarExemplos('Saúde')">
        <div class="svc-icon green"><i class="fas fa-heartbeat"></i></div>
        <div class="svc-card-content">
            <h3>Atestados Médicos</h3>
            <p>Consultas, exames, laudos e aptidão física</p>
        </div>
    </div>
    <div class="svc-card card-pessoais" onclick="mostrarExemplos('Documentos Pessoais')">
        <div class="svc-icon orange"><i class="fas fa-id-card"></i></div>
        <div class="svc-card-content">
            <h3>Documentos Pessoais</h3>
            <p>RG, CNH, Certidões e Título de Eleitor</p>
        </div>
    </div>
    <div class="svc-card card-juridico" onclick="mostrarExemplos('Legal')">
        <div class="svc-icon purple"><i class="fas fa-scale-balanced"></i></div>
        <div class="svc-card-content">
            <h3>Documentos Jurídicos</h3>
            <p>Alvarás, Procurações e Licenças</p>
        </div>
    </div>
    <div class="svc-card card-cursos" onclick="mostrarExemplos('Cursos')">
        <div class="svc-icon teal"><i class="fas fa-building-columns"></i></div>
        <div class="svc-card-content">
            <h3>Cursos e Qualificações</h3>
            <p>SESI, SENAI e cursos técnicos</p>
        </div>
    </div>
    <div class="svc-card card-consulta" onclick="irParaConsulta()">
        <div class="svc-icon red"><i class="fas fa-search"></i></div>
        <div class="svc-card-content">
            <h3>Consulta por Código</h3>
            <p>Valide qualquer documento pelo código</p>
        </div>
    </div>
</div>
</div>

<!-- EXEMPLOS DE DOCUMENTOS -->
<div class="section" id="secaoExemplos" style="display:none;">
    <div class="section-hdr">
        <h2><i class="fas fa-file-lines"></i> <span id="exemplosTitulo">Exemplos de Documentos</span></h2>
    </div>
    <p style="font-size:9px;color:var(--orange);margin-bottom:12px;background:#FFF8E1;padding:8px 12px;border-radius:6px;border:1px solid #FFE082;">
        <i class="fas fa-info-circle"></i> <strong>Exemplos demonstrativos.</strong> Estes são documentos de exemplo para você conhecer o sistema. Clique em qualquer um para ver como funciona a validação.
    </p>
    <div class="svc-grid" id="exemplosGrid"></div>
</div>
    
    <!-- DOCUMENTOS -->
    <div class="section" id="documentos">
        <div class="table-box"><div class="table-top"><h2><i class="fas fa-database"></i> Base Nacional de Documentos</h2><div class="filter-chips" id="filtrosChips"></div></div>
<div class="table-wrap">
    <table>
        <thead><tr><th>Código</th><th>Tipo</th><th>Categoria</th><th>Titular</th><th>Emissor</th><th>Validade</th><th>Situação</th><th></th></tr></thead>
        <tbody id="docsTableBody">
            <tr><td colspan="8" style="text-align:center;padding:24px;"><i class="fas fa-spinner fa-pulse"></i> Carregando...</td></tr>
        </tbody>
    </table>
    <div class="ver-mais-container" id="verMaisContainer" style="display:none;">
        <p style="font-size:9px;color:var(--gray-60);margin-bottom:8px;" id="txtVerMais"></p>
        <button class="btn-ver-mais" id="btnVerMais" onclick="toggleVerMais()">
            <i class="fas fa-chevron-down"></i> Ver Mais Documentos
        </button>
    </div>
</div>
<div class="docs-cards" id="docsCards"></div>
        </div>
    </div>
<!-- INSTITUIÇÕES PARCEIRAS -->
<div class="section" id="parceiros">
    <div class="section-hdr">
        <h2><i class="fas fa-handshake"></i> Instituições Parceiras</h2>
        <div class="parceiros-nav">
            <button onclick="scrollParceiros(-1)" title="Anterior"><i class="fas fa-chevron-left"></i></button>
            <button onclick="scrollParceiros(1)" title="Próximo"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>
    <p style="font-size:9px;color:var(--gray-60);margin-bottom:10px;">
        Instituições que confiam no GOV.BR para validação de documentos. <strong>Arraste para o lado</strong> para ver todas.
    </p>
    <div class="parceiros-scroll" id="parceirosScroll"></div>
</div>
<!-- Adicione após a div parceiros-scroll -->
<div style="display:flex;gap:6px;justify-content:center;margin-top:8px;" id="parceirosIndicadores"></div>
    
    
<!-- AJUDA -->
<div class="section" id="ajuda"><div class="help-box"><h3><i class="fas fa-info-circle"></i> Dúvidas Frequentes</h3><div class="help-grid">
    <div class="help-item"><i class="fas fa-search"></i><div><strong>Como validar?</strong> Digite o código no campo de busca ou clique em qualquer documento da lista.</div></div>
    <div class="help-item"><i class="fas fa-qrcode"></i><div><strong>QR Code?</strong> Escaneie o QR Code no documento para validação instantânea.</div></div>
    <div class="help-item"><i class="fas fa-shield-alt"></i><div><strong>É oficial?</strong> Todos os documentos são autenticados pelo sistema GOV.BR.</div></div>
    <div class="help-item"><i class="fas fa-phone"></i><div><strong>Precisa de ajuda?</strong> Ligue <strong>0800-978-2334</strong> ou acesse <strong>falabr.cgu.gov.br</strong></div></div>
</div></div></div>
</main>

<footer class="footer"><div class="inner"><div class="footer-grid">
<div class="footer-col"><h4>Serviços</h4><a href="#consultar">Validar Documento</a><a href="#documentos">Base de Dados</a></div>
    <div class="footer-col"><h4>Institucional</h4><a href="#">Órgãos do Governo</a><a href="#">Acesso à Informação</a><a href="#">Transparência</a></div>
    <div class="footer-col"><h4>Atendimento</h4><a href="https://falabr.cgu.gov.br" target="_blank">Fala.BR</a><a href="#">Central 0800</a><a href="#">FAQ</a></div>
    <div class="footer-col"><h4>Redes Sociais</h4><a href="#"><i class="fab fa-instagram"></i> Instagram</a><a href="#"><i class="fab fa-facebook"></i> Facebook</a></div>
</div><div class="footer-bot"><div><span class="footer-logo"><span class="fg">G</span><span class="fo">O</span><span class="fv">V</span><span class="fdot">.</span><span class="fb">B</span><span class="fr">R</span></span><span style="margin-left:6px;">© 2025 Governo Federal</span></div><span>Licença Creative Commons CC BY-ND 3.0</span></div></div></footer>

<div id="modalValidacao" class="modal-overlay"><div class="modal-dialog"><div class="modal-hdr"><h3><i class="fas fa-shield-haltered"></i> <span id="modalTitle">Validação</span></h3><button class="modal-close" onclick="fecharModal()">✕</button></div><div class="modal-body" id="modalContent"></div></div></div>

<script>
    const API_BASE = 'https://orange-hill-2e61.gbscabral15.workers.dev/br2.bronxyshost.com:4009?url=http://br2.bronxyshost.com:4009';
    let docs = [], catAtiva = 'todas';
    

// ==================== EXEMPLOS DE DOCUMENTOS ====================
const EXEMPLOS_POR_CATEGORIA = {
  'Educação': [
    { nome: '📜 Certificado Ensino Médio SESI', desc: 'SESI - Conclusão do Ensino Médio', codigo: 'DOC-SESI001', icone: 'fa-graduation-cap', cor: 'blue' },
    { nome: '📚 Certificado Ensino Fundamental SESI', desc: 'SESI - Ensino Fundamental Completo', codigo: 'DOC-SESI002', icone: 'fa-book', cor: 'blue' },
    { nome: '🎓 Diploma Técnico IFCE', desc: 'IFCE - Técnico em Informática', codigo: 'DOC-DIP001', icone: 'fa-award', cor: 'blue' },
    { nome: '🎓 Diploma Superior UNIFOR', desc: 'UNIFOR - Bacharel em Direito', codigo: 'DOC-SUP001', icone: 'fa-user-graduate', cor: 'blue' }
],
    'Saúde': [
        { nome: '🩺 Atestado Médico', desc: 'Hospital Santa Clara - Consulta', codigo: 'DOC-MED001', icone: 'fa-heartbeat', cor: 'green' },
        { nome: '🏊 Atestado de Aptidão Física', desc: 'Clínica FisioSaúde - Piscina', codigo: 'DOC-APT001', icone: 'fa-person-swimming', cor: 'green' },
        { nome: '📄 Laudo Médico INSS', desc: 'Perícia Médica - Auxílio Doença', codigo: 'DOC-LAU001', icone: 'fa-file-medical', cor: 'green' },
        { nome: '🏥 Clínica da Família', desc: 'UBS - Atendimento Familiar', codigo: 'DOC-CLI001', icone: 'fa-house-medical', cor: 'green' }
    ],
    'Documentos Pessoais': [
        { nome: '🪪 Carteira de Identidade (RG)', desc: 'SSP-SP - Em processo de emissão', codigo: 'RG-ABC12', icone: 'fa-id-card', cor: 'orange' },
        { nome: '👶 Certidão de Nascimento', desc: 'Cartório de Registro Civil', codigo: 'CERT-NASC-XY3Z', icone: 'fa-baby', cor: 'orange' },
        { nome: '🗳️ Título de Eleitor', desc: 'TRE - Emissão Digital', codigo: 'TITULO-K9M2', icone: 'fa-check-to-slot', cor: 'orange' }
    ],
    'Legal': [
        { nome: '📋 Alvará de Funcionamento', desc: 'Corpo de Bombeiros - Restaurante', codigo: 'DOC-ALV001', icone: 'fa-clipboard-list', cor: 'purple' },
        { nome: '📜 Procuração Pública', desc: 'Cartório 1º Ofício - Plenos Poderes', codigo: 'DOC-PRO001', icone: 'fa-file-contract', cor: 'purple' },
        { nome: '👨‍👧 Guarda de Menor', desc: 'Vara da Infância - Guarda Compartilhada', codigo: 'DOC-GUA001', icone: 'fa-child', cor: 'purple' }
    ],
   'Cursos': [
    { nome: '🔧 Curso SENAI', desc: 'Técnico em Eletrotécnica', codigo: 'DOC-SENAI001', icone: 'fa-gear', cor: 'teal' },
    { nome: '🏭 Curso SESI', desc: 'Assistente Administrativo', codigo: 'DOC-SESI001', icone: 'fa-industry', cor: 'teal' },
    { nome: '📚 Ensino Fundamental SESI', desc: 'Escola SESI - 9º ano', codigo: 'DOC-SESI002', icone: 'fa-school', cor: 'teal' },
    { nome: '📜 Ensino Médio SESI', desc: 'Escola SESI - 3º ano', codigo: 'DOC-SESI003', icone: 'fa-graduation-cap', cor: 'teal' }
]
};

function mostrarExemplos(categoria) {
    const exemplos = EXEMPLOS_POR_CATEGORIA[categoria] || [];
    const secao = document.getElementById('secaoExemplos');
    const grid = document.getElementById('exemplosGrid');
    const titulo = document.getElementById('exemplosTitulo');
    
    titulo.textContent = `Exemplos de Documentos — ${categoria}`;
    
    if (exemplos.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:20px;color:#999;">Nenhum exemplo disponível para esta categoria.</div>';
    } else {
        grid.innerHTML = exemplos.map(ex => `
            <div class="svc-card" onclick="buscarExemplo('${ex.codigo}')" style="border:2px dashed var(--gray-30);">
                <div class="svc-icon ${ex.cor}"><i class="fas ${ex.icone}"></i></div>
                <h3>${ex.nome}</h3>
                <p>${ex.desc}</p>
                <small style="color:var(--blue);font-family:monospace;font-size:8px;">📋 ${ex.codigo}</small>
            </div>
        `).join('');
    }
    
    secao.style.display = 'block';
    secao.scrollIntoView({behavior:'smooth'});
}

function buscarExemplo(codigo) {
    document.getElementById('codigoInput').value = codigo;
    document.getElementById('consultar').scrollIntoView({behavior:'smooth'});
    setTimeout(() => consultarDocumento(), 400);
}
    // ==================== INSTITUIÇÕES PARCEIRAS ====================
// ==================== INSTITUIÇÕES PARCEIRAS ====================
// Imagens de fundo reais (Unsplash) para cada instituição
const INSTITUICOES = [
  // Adicione estes novos parceiros no array INSTITUICOES, após o último parceiro existente:
{
    id: 'detran-rj', nome: 'DETRAN RJ', tipo: 'Departamento de Trânsito',
    corGradiente: 'linear-gradient(135deg, #1A3A6B, #2B5CB0)',
    fundacao: '1970', sede: 'Rio de Janeiro, RJ', campus: 'Postos em todo estado',
    alunos: '7 milhões+', cursos: 'CNH, Licenciamento, Multas', site: 'detran.rj.gov.br',
    descricao: 'Departamento de Trânsito do Estado do Rio de Janeiro, responsável por habilitação e fiscalização.',
    bgImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=350&fit=crop',
    svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#1A3A6B" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="900" font-family="Arial">DETRAN RJ</text></svg>`
},
{
    id: 'detran-sp', nome: 'DETRAN SP', tipo: 'Departamento de Trânsito',
    corGradiente: 'linear-gradient(135deg, #C00510, #E30613)',
    fundacao: '1969', sede: 'São Paulo, SP', campus: 'Postos em todo estado',
    alunos: '25 milhões+', cursos: 'CNH, Licenciamento, Multas', site: 'detran.sp.gov.br',
    descricao: 'Maior DETRAN do Brasil, responsável por 25 milhões de condutores no estado de São Paulo.',
    bgImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=350&fit=crop',
    svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#C00510" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="900" font-family="Arial">DETRAN SP</text></svg>`
},
{
    id: 'detran-rs', nome: 'DETRAN RS', tipo: 'Departamento de Trânsito',
    corGradiente: 'linear-gradient(135deg, #006837, #009444)',
    fundacao: '1970', sede: 'Porto Alegre, RS', campus: 'Postos em todo estado',
    alunos: '5 milhões+', cursos: 'CNH, Licenciamento, Multas', site: 'detran.rs.gov.br',
    descricao: 'Referência em gestão de trânsito no sul do Brasil, com serviços digitais inovadores.',
    bgImage: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=500&h=350&fit=crop',
    svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#006837" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="900" font-family="Arial">DETRAN RS</text></svg>`
},
{
    id: 'detran-mg', nome: 'DETRAN MG', tipo: 'Departamento de Trânsito',
    corGradiente: 'linear-gradient(135deg, #7B2CBF, #9B59B6)',
    fundacao: '1970', sede: 'Belo Horizonte, MG', campus: 'Postos em todo estado',
    alunos: '10 milhões+', cursos: 'CNH, Licenciamento, Multas', site: 'detran.mg.gov.br',
    descricao: 'DETRAN de Minas Gerais, comprometido com a segurança e educação no trânsito.',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=350&fit=crop',
    svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#7B2CBF" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="900" font-family="Arial">DETRAN MG</text></svg>`
},
{
    id: 'detran-ba', nome: 'DETRAN BA', tipo: 'Departamento de Trânsito',
    corGradiente: 'linear-gradient(135deg, #E07010, #F58220)',
    fundacao: '1970', sede: 'Salvador, BA', campus: 'Postos em todo estado',
    alunos: '6 milhões+', cursos: 'CNH, Licenciamento, Multas', site: 'detran.ba.gov.br',
    descricao: 'DETRAN da Bahia, trabalhando por um trânsito mais seguro no maior estado do Nordeste.',
    bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=350&fit=crop',
    svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#E07010" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="900" font-family="Arial">DETRAN BA</text></svg>`
},
{
    id: 'stf', nome: 'STF', tipo: 'Supremo Tribunal Federal',
    corGradiente: 'linear-gradient(135deg, #1a1a1a, #333333)',
    fundacao: '1890', sede: 'Brasília, DF', campus: 'Tribunal Constitucional',
    alunos: '11 ministros', cursos: 'Jurisprudência, Súmulas Vinculantes', site: 'portal.stf.jus.br',
    descricao: 'Supremo Tribunal Federal, guardião da Constituição Federal do Brasil.',
    bgImage: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=500&h=350&fit=crop',
    svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#1a1a1a" rx="6"/><text x="100" y="38" text-anchor="middle" fill="#FFD700" font-size="24" font-weight="900" font-family="Arial">STF</text></svg>`
},
{
    id: 'ssp', nome: 'SSP', tipo: 'Secretaria de Segurança Pública',
    corGradiente: 'linear-gradient(135deg, #002277, #003399)',
    fundacao: '1823', sede: 'São Paulo, SP', campus: 'Polícia Civil e Militar',
    alunos: '100 mil+ servidores', cursos: 'Segurança Pública, Perícia', site: 'ssp.sp.gov.br',
    descricao: 'Secretaria de Segurança Pública de São Paulo, responsável pela segurança da maior metrópole do país.',
    bgImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=350&fit=crop',
    svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#002277" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="22" font-weight="900" font-family="Arial">SSP</text></svg>`
},
    {
        id: 'estacio', nome: 'Universidade Estácio de Sá', tipo: 'Universidade Privada',
        corGradiente: 'linear-gradient(135deg, #1A3A6B, #2B5CB0)',
        fundacao: '1970', sede: 'Rio de Janeiro, RJ', campus: '90+ unidades',
        alunos: '500.000+', cursos: 'Graduação, Pós, Mestrado, Doutorado', site: 'estacio.br',
        descricao: 'Uma das maiores universidades do Brasil, com mais de 50 anos de tradição em ensino de qualidade.',
        bgImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=350&fit=crop',
        svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#1A3A6B" rx="6"/><text x="100" y="36" text-anchor="middle" fill="white" font-size="18" font-weight="900" font-family="Arial">ESTÁCIO</text></svg>`
    },
    {
        id: 'anhanguera', nome: 'Anhanguera', tipo: 'Universidade Privada',
        corGradiente: 'linear-gradient(135deg, #E8611A, #F0823A)',
        fundacao: '1994', sede: 'Campinas, SP', campus: '70+ unidades',
        alunos: '400.000+', cursos: 'Graduação, Pós, Tecnólogos', site: 'anhanguera.com',
        descricao: 'Educação de qualidade com infraestrutura moderna e professores qualificados em todo o Brasil.',
        bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=350&fit=crop',
        svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#E8611A" rx="6"/><text x="100" y="36" text-anchor="middle" fill="white" font-size="16" font-weight="900" font-family="Arial">ANHANGUERA</text></svg>`
    },
    {
        id: 'sesi', nome: 'SESI', tipo: 'Serviço Social da Indústria',
        corGradiente: 'linear-gradient(135deg, #C00510, #E30613)',
        fundacao: '1946', sede: 'Brasília, DF', campus: '500+ unidades',
        alunos: '2.000.000+', cursos: 'Ensino Fundamental, Médio, EJA, Técnicos', site: 'sesi.org.br',
        descricao: 'Referência em educação básica e profissional, formando crianças, jovens e adultos.',
        bgImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=350&fit=crop',
        svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#E30613" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="28" font-weight="900" font-family="Arial">SESI</text></svg>`
    },
    {
        id: 'senai', nome: 'SENAI', tipo: 'Formação Profissional',
        corGradiente: 'linear-gradient(135deg, #002277, #003399)',
        fundacao: '1942', sede: 'Brasília, DF', campus: '600+ unidades',
        alunos: '3.500.000+', cursos: 'Técnicos, Aprendizagem, Qualificação', site: 'senai.br',
        descricao: 'Maior complexo de educação profissional da América Latina, com 80+ anos de história.',
        bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop',
        svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#003399" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="26" font-weight="900" font-family="Arial">SENAI</text></svg>`
    },
    {
        id: 'senac', nome: 'SENAC', tipo: 'Educação Profissional',
        corGradiente: 'linear-gradient(135deg, #E07010, #F58220)',
        fundacao: '1946', sede: 'Rio de Janeiro, RJ', campus: '600+ unidades',
        alunos: '2.000.000+', cursos: 'Técnicos, Livres, Graduação, Idiomas', site: 'senac.br',
        descricao: 'Referência em educação profissional no comércio, serviços e turismo.',
        bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=350&fit=crop',
        svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#F58220" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="26" font-weight="900" font-family="Arial">SENAC</text></svg>`
    },
    {
        id: 'ifrj', nome: 'IFRJ', tipo: 'Instituto Federal',
        corGradiente: 'linear-gradient(135deg, #006837, #009444)',
        fundacao: '2008', sede: 'Rio de Janeiro, RJ', campus: '15 campi',
        alunos: '25.000+', cursos: 'Técnicos, Graduação, Pós', site: 'ifrj.edu.br',
        descricao: 'Educação profissional, científica e tecnológica gratuita de qualidade.',
        bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=350&fit=crop',
        svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#006837" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="26" font-weight="900" font-family="Arial">IFRJ</text></svg>`
    },
    {
        id: 'ifsp', nome: 'IFSP', tipo: 'Instituto Federal',
        corGradiente: 'linear-gradient(135deg, #1E6B3E, #2D9A5A)',
        fundacao: '1909', sede: 'São Paulo, SP', campus: '37 campi',
        alunos: '55.000+', cursos: 'Técnicos, Graduação, Pós', site: 'ifsp.edu.br',
        descricao: 'Mais de um século de excelência em educação técnica e tecnológica.',
        bgImage: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=500&h=350&fit=crop',
        svgLogo: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="60" fill="#1E6B3E" rx="6"/><text x="100" y="38" text-anchor="middle" fill="white" font-size="26" font-weight="900" font-family="Arial">IFSP</text></svg>`
    }
];

let autoScrollInterval;
function atualizarIndicadores() {
    const carousel = document.getElementById('parceirosScroll');
    const total = INSTITUICOES.length;
    const visiveis = Math.floor(carousel.clientWidth / 220);
    const paginaAtual = Math.floor(carousel.scrollLeft / 220);
    
    let html = '';
    for (let i = 0; i < Math.ceil(total / visiveis); i++) {
        html += `<span style="width:8px;height:8px;border-radius:50%;background:${i === paginaAtual ? '#1351B4' : '#ccc'};display:inline-block;transition:all 0.3s;"></span>`;
    }
    
    const indicadores = document.getElementById('parceirosIndicadores');
    if (indicadores) indicadores.innerHTML = html;
}
function renderizarInstituicoes() {
    document.getElementById('parceirosScroll').innerHTML = INSTITUICOES.map(inst => `
        <div class="parceiro-card-new" onclick="abrirModalInstituicao('${inst.id}')">
            <div class="parceiro-bg" style="background-image:url('${inst.bgImage}');background-color:${inst.corGradiente.split(',')[0].replace('linear-gradient(135deg,','').trim()};"></div>
            <div class="parceiro-overlay"></div>
            <div class="parceiro-content">
                <div class="parceiro-logo-mini" style="background:${inst.corGradiente};">${inst.svgLogo}</div>
                <h5>${inst.nome}</h5>
                <small>${inst.tipo}</small>
            </div>
        </div>
    `).join('');
    
    // Iniciar carrossel automático
    iniciarAutoScroll();
}

function iniciarAutoScroll() {
    // Parar qualquer intervalo existente
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    
    const carousel = document.getElementById('parceirosScroll');
    
    autoScrollInterval = setInterval(() => {
        // Verificar se chegou ao final
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
            // Voltar ao início
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Avançar
            carousel.scrollBy({ left: 220, behavior: 'smooth' });
        }
    }, 3000); // Muda a cada 3 segundos
}

// Parar auto-scroll quando o usuário interagir
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('parceirosScroll');
    
    if (carousel) {
        // Parar ao passar o mouse
        carousel.addEventListener('mouseenter', () => {
            if (autoScrollInterval) clearInterval(autoScrollInterval);
        });
        
        // Retomar ao tirar o mouse
        carousel.addEventListener('mouseleave', () => {
            iniciarAutoScroll();
        });
        
        // Parar ao tocar (mobile)
        carousel.addEventListener('touchstart', () => {
            if (autoScrollInterval) clearInterval(autoScrollInterval);
        });
        
        // Retomar após 3 segundos sem tocar
        carousel.addEventListener('touchend', () => {
            setTimeout(iniciarAutoScroll, 3000);
        });
    }
});

function scrollParceiros(direction) {
    const carousel = document.getElementById('parceirosScroll');
    carousel.scrollBy({ left: 220 * direction, behavior: 'smooth' });
    
    // Reiniciar o timer do auto-scroll
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    iniciarAutoScroll();
}

function scrollParceiros(direction) {
    const carousel = document.getElementById('parceirosScroll');
    carousel.scrollBy({ left: 220 * direction, behavior: 'smooth' });
}

function abrirModalInstituicao(id) {
    const inst = INSTITUICOES.find(i => i.id === id);
    if (!inst) return;
    
    Swal.fire({
        html: `
            <div style="text-align:center;">
                <div style="width:80px;height:80px;border-radius:16px;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;background:${inst.corGradiente};box-shadow:0 4px 15px rgba(0,0,0,0.2);">
                    ${inst.svgLogo}
                </div>
                <h3 style="font-size:16px;font-weight:800;margin-bottom:2px;">${inst.nome}</h3>
                <p style="font-size:9px;color:#1351B4;font-weight:700;text-transform:uppercase;margin-bottom:10px;">${inst.tipo}</p>
                <p style="font-size:10px;color:#666;line-height:1.6;margin-bottom:10px;">${inst.descricao}</p>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;text-align:left;">
                    <div style="background:#F8FAFC;padding:8px;border-radius:6px;"><small style="color:#999;">Fundação</small><br><strong style="font-size:10px;">${inst.fundacao}</strong></div>
                    <div style="background:#F8FAFC;padding:8px;border-radius:6px;"><small style="color:#999;">Sede</small><br><strong style="font-size:10px;">${inst.sede}</strong></div>
                    <div style="background:#F8FAFC;padding:8px;border-radius:6px;"><small style="color:#999;">Alunos</small><br><strong style="font-size:10px;">${inst.alunos}</strong></div>
                    <div style="background:#F8FAFC;padding:8px;border-radius:6px;"><small style="color:#999;">Site</small><br><strong style="font-size:10px;color:#1351B4;">${inst.site}</strong></div>
                </div>
            </div>
        `,
        showConfirmButton: true,
        confirmButtonText: 'Fechar',
        confirmButtonColor: '#1351B4',
        width: '460px'
    });
}






    // ==================== API ====================
    async function carregarDocumentos() {
        try {
            const resp = await fetch(`${API_BASE}/cliente07/documentos/publicos`);
            const data = await resp.json();
            if(data.success) { docs = data.documentos||[] }
        } catch(e) {
            console.log('API offline');
            docs = [
                { id:1, codigo:"DOC-EDU001", tipo_nome:"📜 Certificado Ensino Médio", categoria:"Educação", titular:"Ana Carolina Santos", emissor:"Secretaria de Educação - SP", data_emissao:"2024-01-15T10:00:00Z", data_validade:"2029-01-15", status:"valid", rast:false },
                { id:2, codigo:"RG-ABC12", tipo_nome:"🪪 Carteira de Identidade (RG)", categoria:"Documentos Pessoais", titular:"Carlos Oliveira", emissor:"SSP-SP", data_emissao:"2024-02-20T10:00:00Z", data_validade:"2034-02-20", status:"solicitado", rast:true, etapas:[{nome:"Solicitação Recebida",ok:true,data:"20/02/2024"},{nome:"Análise Documental",ok:true,data:"22/02/2024"},{nome:"Coleta de Biometria",ok:true,data:"25/02/2024"},{nome:"Emissão do RG",ok:false,data:null},{nome:"Disponível para Retirada",ok:false,data:null}], prev:"05/03/2024" },
                
              // Adicione estes documentos de exemplo de certificados e cursos:
{ id:10, codigo:"DOC-EDU010", tipo:"certificado_ensino_medio", tipo_nome:"📜 Certificado de Conclusão do Ensino Médio", categoria:"Educação", 
  titular:"Maria Eduarda Silva", cpf:"111.222.333-44", rg:"11.222.333-4", nascimento:"2005-08-20",
  instituicao:"SESI - Serviço Social da Indústria", endereco_instituicao:"Av. Paulista, 1000 - São Paulo/SP",
  grau_formacao:"Ensino Médio Completo", ano_conclusao:"2023", carga_horaria:"2.400 horas",
  reconhecimento:"MEC - Portaria nº 1.234/2024",
  emissor:"SESI - Serviço Social da Indústria",
  informacoes:"Certificado de conclusão do Ensino Médio reconhecido pelo MEC.",
  data_emissao:"2023-12-15T10:00:00Z", data_validade:"2028-12-15", status:"valid", rast:false },

{ id:11, codigo:"DOC-EDU011", tipo:"certificado_ensino_fundamental", tipo_nome:"📚 Certificado de Conclusão do Ensino Fundamental", categoria:"Educação",
  titular:"João Pedro Oliveira", cpf:"222.333.444-55", rg:"22.333.444-5", nascimento:"2009-03-10",
  instituicao:"SESI - Escola de Educação Básica", endereco_instituicao:"Rua das Flores, 500 - Rio de Janeiro/RJ",
  grau_formacao:"Ensino Fundamental Completo", ano_conclusao:"2023", carga_horaria:"1.600 horas",
  reconhecimento:"MEC - Certificação Nacional",
  emissor:"SESI - Escola de Educação Básica",
  informacoes:"Certificado de conclusão do Ensino Fundamental.",
  data_emissao:"2023-12-20T10:00:00Z", data_validade:"2028-12-20", status:"valid", rast:false },

{ id:12, codigo:"DOC-SENAI001", tipo:"senai_certificado", tipo_nome:"🔧 Certificado de Curso SENAI", categoria:"Educação",
  titular:"Rafael Gomes Santos", cpf:"333.444.555-66", rg:"33.444.555-6", nascimento:"2000-05-15",
  instituicao:"SENAI - Serviço Nacional de Aprendizagem Industrial", endereco_instituicao:"Av. Industrial, 200 - Fortaleza/CE",
  curso:"Técnico em Eletrotécnica", grau_formacao:"Curso Técnico Profissionalizante",
  ano_conclusao:"2024", carga_horaria:"1.200 horas", duracao:"18 meses",
  reconhecimento:"Registro no CFT - Conselho Federal dos Técnicos",
  emissor:"SENAI - Departamento Regional",
  informacoes:"Curso técnico profissionalizante concluído com aprovação.",
  data_emissao:"2024-06-10T10:00:00Z", data_validade:"2029-06-10", status:"valid", rast:false },

{ id:13, codigo:"DOC-SESI001", tipo:"sesi_curso", tipo_nome:"🏭 Certificado de Curso SESI", categoria:"Educação",
  titular:"Amanda Costa Lima", cpf:"444.555.666-77", rg:"44.555.666-7", nascimento:"2002-11-25",
  instituicao:"SESI - Serviço Social da Indústria", endereco_instituicao:"Av. das Indústrias, 800 - Belo Horizonte/MG",
  curso:"Assistente Administrativo", grau_formacao:"Curso de Qualificação Profissional",
  ano_conclusao:"2024", carga_horaria:"800 horas", duracao:"12 meses",
  reconhecimento:"Certificação reconhecida pelo Ministério do Trabalho",
  emissor:"SESI - Unidade Belo Horizonte",
  informacoes:"Curso de qualificação profissional concluído com êxito.",
  data_emissao:"2024-03-15T10:00:00Z", data_validade:"2029-03-15", status:"valid", rast:false }
            ];
          
          
        }
        carregarFiltros(); renderAll();
    }
    
    function carregarFiltros() {
        const cats = ['todas', ...new Set(docs.map(d => d.categoria || 'Outros'))];
        document.getElementById('filtrosChips').innerHTML = cats.map(c => `<button class="chip ${c==='todas'?'active':''}" onclick="filtrarTabela('${c}', this)">${c==='todas'?'📋 Todas':c}</button>`).join('');
    }
    
    function filtrarTabela(cat, btn) { catAtiva = cat; document.querySelectorAll('#filtrosChips .chip').forEach(b => b.classList.remove('active')); if(btn) btn.classList.add('active'); renderAll(); }
    function getFiltrados() { return catAtiva==='todas' ? docs : docs.filter(d => (d.categoria||'Outros')===catAtiva); }
    function renderAll() { renderTable(); renderCards(); }
    
function renderTable() {
    const filtrados = getFiltrados();
    const tbody = document.getElementById('docsTableBody');
    const verMaisContainer = document.getElementById('verMaisContainer');
    const btnVerMais = document.getElementById('btnVerMais');
    const txtVerMais = document.getElementById('txtVerMais');
    
    if (!filtrados.length) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:20px;color:#999;">Nenhum documento encontrado.</td></tr>';
        verMaisContainer.style.display = 'none';
        return;
    }
    
    const docsVisiveis = filtrados.slice(0, 3);
    const docsEscondidos = filtrados.slice(3);
    const temMais = docsEscondidos.length > 0;
    
    // Renderizar TODOS os documentos
    let html = '';
    
    // Documentos visíveis
    html += docsVisiveis.map(d => renderDocRow(d)).join('');
    
    // Documentos escondidos (se houver)
    if (temMais) {
        html += docsEscondidos.map((d, i) => {
            return renderDocRow(d, true); // Passa flag de escondido
        }).join('');
    }
    
    tbody.innerHTML = html;
    
    // Agora adiciona a classe nos escondidos
    if (temMais) {
        const todasLinhas = tbody.querySelectorAll('tr');
        // As primeiras 3 linhas são visíveis, o resto é escondido
        todasLinhas.forEach((linha, index) => {
            if (index >= 3) {
                linha.classList.add('doc-escondida');
                linha.style.display = 'none';
            }
        });
    }
    
    // Mostrar/ocultar botão ver mais
    if (temMais) {
        verMaisContainer.style.display = 'block';
        btnVerMais.style.display = 'inline-flex';
        btnVerMais.innerHTML = '<i class="fas fa-chevron-down"></i> Ver Mais Documentos';
        btnVerMais.setAttribute('data-expandido', 'false');
        txtVerMais.textContent = `Mostrando 3 de ${filtrados.length} documento(s) — ${docsEscondidos.length} oculto(s)`;
    } else {
        verMaisContainer.style.display = 'block';
        btnVerMais.style.display = 'none';
        txtVerMais.textContent = `Mostrando ${filtrados.length} de ${filtrados.length} documento(s)`;
    }
}

function renderDocRow(d, escondido = false) {
    const dv = d.data_validade ? new Date(d.data_validade) : null;
    const exp = dv && dv < new Date();
    const isProg = d.status === 'progress' || d.status === 'andamento' || d.status === 'solicitado';
    const cls = exp ? 'exp' : (isProg ? 'prog' : 'ok');
    const lbl = exp ? '⚠ Expirado' : (isProg ? '⏳ Em andamento' : '✅ Válido');
    const temRast = d.rast || d.rastreamento || d.etapas || isProg;
    
    return `<tr onclick="openModalDoc(${d.id})" style="cursor:pointer;">
        <td><span class="code-tag">${d.codigo}</span></td>
        <td>${(d.tipo_nome || '📄').substring(0, 22)}</td>
        <td>${d.categoria || 'Outros'}</td>
        <td>${d.titular}</td>
        <td>${(d.emissor || '').substring(0, 18)}</td>
<td>${dv ? (dv.getFullYear() >= 2099 ? '♾️ Vitalício' : dv.toLocaleDateString('pt-BR')) : 'N/A'}</td>
        <td><span class="badge ${cls}">${lbl}</span></td>
        <td><button class="btn-sm ${temRast ? '' : 'primary'}" onclick="event.stopPropagation();openModalDoc(${d.id})"><i class="fas fa-${temRast ? 'route' : 'check-double'}"></i> ${temRast ? 'Rastrear' : 'Validar'}</button></td>
    </tr>`;
}

function toggleVerMais() {
    const btn = document.getElementById('btnVerMais');
    const expandido = btn.getAttribute('data-expandido') === 'true';
    const linhasEscondidas = document.querySelectorAll('#docsTableBody tr.doc-escondida');
    
    if (expandido) {
        // Recolher
        linhasEscondidas.forEach(linha => linha.style.display = 'none');
        btn.innerHTML = '<i class="fas fa-chevron-down"></i> Ver Mais Documentos';
        btn.setAttribute('data-expandido', 'false');
    } else {
        // Expandir
        linhasEscondidas.forEach(linha => linha.style.display = '');
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> Recolher';
        btn.setAttribute('data-expandido', 'true');
    }
}
    
function renderCards() {
    const filtrados = getFiltrados();
    const c = document.getElementById('docsCards');
    
    if (!filtrados.length) {
        c.innerHTML = '<div style="padding:20px;text-align:center;color:#999;">Nenhum documento.</div>';
        return;
    }
    
    const docsVisiveis = filtrados.slice(0, 3);
    const docsEscondidos = filtrados.slice(3);
    const temMais = docsEscondidos.length > 0;
    
    let html = docsVisiveis.map(d => renderDocCard(d)).join('');
    
    if (temMais) {
        html += `<div class="docs-cards-escondidos" id="cardsEscondidos" style="display:none;">`;
        html += docsEscondidos.map(d => renderDocCard(d)).join('');
        html += `</div>`;
        html += `<div style="text-align:center;padding:12px 0;">
            <p style="font-size:9px;color:var(--gray-60);margin-bottom:6px;">Mostrando 3 de ${filtrados.length} — ${docsEscondidos.length} oculto(s)</p>
            <button class="btn-ver-mais" id="btnVerMaisCards" onclick="toggleVerMaisCards()">
                <i class="fas fa-chevron-down"></i> Ver Mais Documentos
            </button>
        </div>`;
    }
    
    c.innerHTML = html;
}

function renderDocCard(d) {
    const dv = d.data_validade ? new Date(d.data_validade) : null;
    const exp = dv && dv < new Date();
    const isProg = d.status === 'progress' || d.status === 'andamento' || d.status === 'solicitado';
    const cls = exp ? 'exp' : (isProg ? 'prog' : 'ok');
    const lbl = exp ? '⚠ Expirado' : (isProg ? '⏳ Em andamento' : '✅ Válido');
    const temRast = d.rast || d.rastreamento || d.etapas || isProg;
    
    return `<div class="doc-card-mobile" onclick="openModalDoc(${d.id})">
        <div class="doc-card-header"><span class="doc-type">${d.tipo_nome || '📄'}</span><span class="badge ${cls}">${lbl}</span></div>
        <div class="doc-card-info">
            <div class="info-item"><div class="info-label">Código</div><div class="info-value code-tag">${d.codigo}</div></div>
            <div class="info-item"><div class="info-label">Titular</div><div class="info-value">${d.titular}</div></div>
        </div>
        <div class="doc-card-action">
            <button class="btn-sm ${temRast ? '' : 'primary'}" onclick="event.stopPropagation();openModalDoc(${d.id})">
                <i class="fas fa-${temRast ? 'route' : 'check-double'}"></i> ${temRast ? 'Rastrear' : 'Validar'}
            </button>
        </div>
    </div>`;
}

function toggleVerMaisCards() {
    const btn = document.getElementById('btnVerMaisCards');
    const escondidos = document.getElementById('cardsEscondidos');
    
    if (escondidos.style.display === 'none') {
        escondidos.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-chevron-up"></i> Recolher';
    } else {
        escondidos.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-chevron-down"></i> Ver Mais Documentos';
    }
}
    
    function irParaConsulta() { document.getElementById('consultar').scrollIntoView({behavior:'smooth'}); setTimeout(()=>document.getElementById('codigoInput').focus(),400); }
    function irParaSolicitar() { document.getElementById('solicitar').scrollIntoView({behavior:'smooth'}); }
    
    function filtrarEConsultar(cat) {
        catAtiva = cat;
        document.querySelectorAll('#filtrosChips .chip').forEach(b => { b.classList.remove('active'); if(b.textContent.includes(cat)) b.classList.add('active'); });
        document.getElementById('documentos').scrollIntoView({behavior:'smooth'});
        renderAll();
        setTimeout(()=>irParaConsulta(),500);
    }
    
    async function consultarDocumento() {
        const cod = document.getElementById('codigoInput').value.trim().toUpperCase();
        if(!cod) { Swal.fire({icon:'warning',title:'Informe o código',confirmButtonColor:'#1351B4'}); return; }
        Swal.fire({title:'🔍 Consultando...',allowOutsideClick:false,didOpen:()=>Swal.showLoading()});
        try {
            const resp = await fetch(`${API_BASE}/cliente07/documentos/consultar`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({codigo:cod})});
            const data = await resp.json();
            Swal.close();
            if(data.success && data.documento) {
                if(!docs.find(d=>d.id===data.documento.id)) { docs.unshift(data.documento); renderAll(); carregarFiltros(); }
                openModalDoc(data.documento.id); return;
            }
        } catch(e) { console.log('API offline'); }
        Swal.close();
        const doc = docs.find(d => d.codigo === cod);
        doc ? openModalDoc(doc.id) : Swal.fire({icon:'error',title:'Não localizado',html:`<p>Código <strong>${cod}</strong> não encontrado.</p>`,confirmButtonColor:'#1351B4'});
    }
    
    function mostrarInfo() { Swal.fire({icon:'info',title:'Como consultar',html:'<p style="font-size:12px;">Digite o código ou <strong>clique em qualquer documento</strong>.</p>',confirmButtonColor:'#1351B4'}); }
    
    function openModalDoc(id) {
        const d = docs.find(x => x.id == id);
        if(!d) return;
        const temRast = d.rast||d.rastreamento||d.etapas||d.status==='progress'||d.status==='andamento'||d.status==='solicitado';
        temRast ? modalRastreamento(d) : modalValidacao(d);
    }
    
function modalValidacao(d) {
    document.getElementById('modalTitle').textContent = 'Validação';
    const dv = d.data_validade ? new Date(d.data_validade) : null;
    const exp = dv && dv < new Date();
    const urlQR = `${window.location.origin}/?codigo=${d.codigo}`;
    
    const tipo = d.tipo || '';
    
    // Construir campos específicos que vão DIRETO no grid principal
    let camposExtras = '';
    
    // ==================== CAMPOS PARA EDUCAÇÃO ====================
    if (['certificado_ensino_medio','certificado_ensino_fundamental','ensino_medio_sesi',
         'ensino_fundamental_sesi','ensino_fund_medio_sesi','declaracao_escolaridade',
         'diploma_superior','senai_certificado','sesi_curso','senac_curso'].includes(tipo)) {
        camposExtras += d.nome_aluno ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Aluno</span><br><strong style="font-size:11px;">${d.nome_aluno}</strong></div>` : '';
        camposExtras += d.nascimento_aluno ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Nascimento</span><br><strong style="font-size:11px;">${d.nascimento_aluno}</strong></div>` : '';
        camposExtras += d.instituicao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Instituição</span><br><strong style="font-size:11px;">${d.instituicao}</strong></div>` : '';
        camposExtras += d.endereco_instituicao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Endereço</span><br><strong style="font-size:10px;">${d.endereco_instituicao}</strong></div>` : '';
        camposExtras += d.curso ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Curso</span><br><strong style="font-size:11px;">${d.curso}</strong></div>` : '';
        camposExtras += d.ano_conclusao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Ano Conclusão</span><br><strong style="font-size:11px;">${d.ano_conclusao}</strong></div>` : '';
        camposExtras += d.carga_horaria ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Carga Horária</span><br><strong style="font-size:11px;">${d.carga_horaria}</strong></div>` : '';
        camposExtras += d.duracao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Duração</span><br><strong style="font-size:11px;">${d.duracao}</strong></div>` : '';
        camposExtras += d.reconhecimento ? `<div style="grid-column:1/-1;"><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Reconhecimento</span><br><strong style="font-size:11px;">${d.reconhecimento}</strong></div>` : '';
    }
    
    // SAÚDE
    if (['atestado_medico','laudo_inss'].includes(tipo)) {
        camposExtras += d.estabelecimento ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Estabelecimento</span><br><strong style="font-size:11px;">${d.estabelecimento}</strong></div>` : '';
        camposExtras += d.endereco_estabelecimento ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Endereço</span><br><strong style="font-size:10px;">${d.endereco_estabelecimento}</strong></div>` : '';
        camposExtras += d.medico ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Médico</span><br><strong style="font-size:11px;">${d.medico}</strong></div>` : '';
        camposExtras += d.crm ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CRM</span><br><strong style="font-size:11px;">${d.crm}</strong></div>` : '';
        camposExtras += d.cid ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CID</span><br><strong style="font-size:11px;">${d.cid}</strong></div>` : '';
    }
    // RECEITA MÉDICA
if (tipo === 'receita_medica') {
    camposExtras += d.instituicao_receita ? `<div style="grid-column:1/-1;"><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">🏥 Instituição/Hospital</span><br><strong style="font-size:11px;">${d.instituicao_receita}</strong></div>` : '';
    camposExtras += d.endereco_instituicao_receita ? `<div style="grid-column:1/-1;"><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">📍 Endereço</span><br><strong style="font-size:10px;">${d.endereco_instituicao_receita}</strong></div>` : '';
    camposExtras += d.nome_medico ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">👨‍⚕️ Médico(a)</span><br><strong style="font-size:11px;">${d.nome_medico}</strong></div>` : '';
    camposExtras += d.crm_medico ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">📋 CRM</span><br><strong style="font-size:11px;">${d.crm_medico}</strong></div>` : '';
    camposExtras += d.descricao_receita ? `<div style="grid-column:1/-1;"><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">💊 Medicamentos/Descrição</span><br><strong style="font-size:10px;">${d.descricao_receita}</strong></div>` : '';
}
// LIMPA NOME SPC/SERASA
if (tipo === 'limpa_nome') {
    camposExtras += d.nome_titular_limpa ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">👤 Titular</span><br><strong style="font-size:12px;">${d.nome_titular_limpa}</strong></div>` : '';
    camposExtras += d.cpf_titular_limpa ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">📄 CPF</span><br><strong style="font-size:11px;">${d.cpf_titular_limpa}</strong></div>` : '';
    camposExtras += d.procedimento_limpa ? `<div style="grid-column:1/-1;background:#F0FDF4;padding:8px;border-radius:8px;margin-top:4px;"><span style="font-size:7px;text-transform:uppercase;color:#16A34A;font-weight:700;">📋 Procedimento / Finalidade</span><br><strong style="font-size:11px;">${d.procedimento_limpa}</strong></div>` : '';
    camposExtras += d.emissor_limpa ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">🏢 Emissor</span><br><strong style="font-size:11px;">${d.emissor_limpa}</strong></div>` : '';
    camposExtras += d.observacoes_limpa ? `<div style="grid-column:1/-1;"><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">📝 Observações</span><br><strong style="font-size:10px;">${d.observacoes_limpa}</strong></div>` : '';
    // Adicionar selo "Nome Limpo"
    if (d.status !== 'expired' && d.status !== 'solicitado') {
        camposExtras += `<div style="grid-column:1/-1;background:linear-gradient(135deg, #22C55E, #16A34A);color:#fff;text-align:center;padding:8px;border-radius:8px;margin-top:4px;">
            <i class="fas fa-check-circle"></i> <strong>✅ NOME LIMPO / NEGATIVAÇÃO REMOVIDA</strong>
        </div>`;
    }
}
    
    // DOCUMENTOS PESSOAIS
    if (['rg','cnh','certidao_nascimento','certidao_casamento','certidao_obito','titulo_eleitor'].includes(tipo)) {
        camposExtras += d.endereco_orgao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Endereço Órgão</span><br><strong style="font-size:10px;">${d.endereco_orgao}</strong></div>` : '';
        camposExtras += d.categoria_cnh ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Categoria CNH</span><br><strong style="font-size:11px;">${d.categoria_cnh}</strong></div>` : '';
        camposExtras += d.registro_cnh ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Registro CNH</span><br><strong style="font-size:11px;">${d.registro_cnh}</strong></div>` : '';
        camposExtras += d.zona_eleitoral ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Zona Eleitoral</span><br><strong style="font-size:11px;">${d.zona_eleitoral}</strong></div>` : '';
        camposExtras += d.secao_eleitoral ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Seção</span><br><strong style="font-size:11px;">${d.secao_eleitoral}</strong></div>` : '';
        camposExtras += d.livro ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Livro</span><br><strong style="font-size:11px;">${d.livro}</strong></div>` : '';
        camposExtras += d.folha ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Folha</span><br><strong style="font-size:11px;">${d.folha}</strong></div>` : '';
        camposExtras += d.termo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Termo</span><br><strong style="font-size:11px;">${d.termo}</strong></div>` : '';
    }
    
    // VEÍCULOS
    if (tipo === 'transferencia_veiculo') {
        camposExtras += d.placa_veiculo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Placa</span><br><strong style="font-size:14px;font-family:monospace;">${d.placa_veiculo}</strong></div>` : '';
        camposExtras += d.crlv ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CRLV Digital</span><br><strong style="font-size:11px;">${d.crlv}</strong></div>` : '';
        camposExtras += d.modelo_veiculo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Modelo</span><br><strong style="font-size:11px;">${d.modelo_veiculo}</strong></div>` : '';
        camposExtras += d.ano_veiculo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Ano</span><br><strong style="font-size:11px;">${d.ano_veiculo}</strong></div>` : '';
        camposExtras += d.cor_veiculo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Cor</span><br><strong style="font-size:11px;">${d.cor_veiculo}</strong></div>` : '';
        camposExtras += d.endereco_detran ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">DETRAN</span><br><strong style="font-size:10px;">${d.endereco_detran}</strong></div>` : '';
        camposExtras += d.antigo_dono ? `<div><span style="font-size:7px;text-transform:uppercase;color:#DC2626;font-weight:700;">Proprietário Atual</span><br><strong style="font-size:11px;">${d.antigo_dono}</strong></div>` : '';
        camposExtras += d.cpf_antigo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF Atual</span><br><strong style="font-size:11px;">${d.cpf_antigo}</strong></div>` : '';
        camposExtras += d.novo_dono ? `<div><span style="font-size:7px;text-transform:uppercase;color:#16A34A;font-weight:700;">Novo Proprietário</span><br><strong style="font-size:11px;">${d.novo_dono}</strong></div>` : '';
        camposExtras += d.cpf_novo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF Novo</span><br><strong style="font-size:11px;">${d.cpf_novo}</strong></div>` : '';
    }
    
    // NOTA FISCAL
    if (tipo === 'nota_fiscal') {
        camposExtras += d.numero_nota ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Nº Nota</span><br><strong style="font-size:11px;">${d.numero_nota}</strong></div>` : '';
        camposExtras += d.valor_nota ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Valor</span><br><strong style="font-size:11px;">R$ ${d.valor_nota}</strong></div>` : '';
        camposExtras += d.emitente_nota ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Emitente</span><br><strong style="font-size:11px;">${d.emitente_nota}</strong></div>` : '';
        camposExtras += d.cnpj_emitente ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CNPJ Emitente</span><br><strong style="font-size:11px;">${d.cnpj_emitente}</strong></div>` : '';
        camposExtras += d.endereco_emitente ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Endereço</span><br><strong style="font-size:10px;">${d.endereco_emitente}</strong></div>` : '';
        camposExtras += d.destinatario_nota ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Destinatário</span><br><strong style="font-size:11px;">${d.destinatario_nota}</strong></div>` : '';
        camposExtras += d.cpf_destinatario ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF Destinatário</span><br><strong style="font-size:11px;">${d.cpf_destinatario}</strong></div>` : '';
    }
    
    // ALVARÁS E LICENÇAS
    if (['alvara_vigilancia','alvara_funcionamento','alvara_bombeiros','licenca_geral'].includes(tipo)) {
        camposExtras += d.nome_titular_alvara ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Titular</span><br><strong style="font-size:11px;">${d.nome_titular_alvara}</strong></div>` : '';
        camposExtras += d.cpf_cnpj_titular ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF/CNPJ Titular</span><br><strong style="font-size:11px;">${d.cpf_cnpj_titular}</strong></div>` : '';
        camposExtras += d.endereco_titular ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Endereço Titular</span><br><strong style="font-size:10px;">${d.endereco_titular}</strong></div>` : '';
        camposExtras += d.endereco_orgao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Endereço Órgão</span><br><strong style="font-size:10px;">${d.endereco_orgao}</strong></div>` : '';
        camposExtras += d.cnpj ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CNPJ Órgão</span><br><strong style="font-size:11px;">${d.cnpj}</strong></div>` : '';
        camposExtras += d.processo ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Processo</span><br><strong style="font-size:11px;">${d.processo}</strong></div>` : '';
        camposExtras += d.tipo_alvara ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Tipo</span><br><strong style="font-size:11px;">${d.tipo_alvara}</strong></div>` : '';
        camposExtras += d.validade_alvara ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Validade Alvará</span><br><strong style="font-size:11px;">${d.validade_alvara}</strong></div>` : '';
    }
    
    // TERMO DE GUARDA
    if (tipo === 'termo_guarda') {
        camposExtras += d.nome_crianca ? `<div><span style="font-size:7px;text-transform:uppercase;color:#E67E22;font-weight:700;">👶 Criança</span><br><strong style="font-size:12px;">${d.nome_crianca}</strong></div>` : '';
        camposExtras += d.cpf_crianca ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF Criança</span><br><strong style="font-size:11px;">${d.cpf_crianca}</strong></div>` : '';
        camposExtras += d.responsavel1 ? `<div><span style="font-size:7px;text-transform:uppercase;color:#1351B4;font-weight:700;">👤 Responsável</span><br><strong style="font-size:12px;">${d.responsavel1}</strong></div>` : '';
        camposExtras += d.cpf_responsavel1 ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF Responsável</span><br><strong style="font-size:11px;">${d.cpf_responsavel1}</strong></div>` : '';
        camposExtras += d.parentesco1 ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Parentesco</span><br><strong style="font-size:11px;">${d.parentesco1}</strong></div>` : '';
        camposExtras += d.nome_juiz ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Juiz</span><br><strong style="font-size:11px;">${d.nome_juiz}</strong></div>` : '';
        camposExtras += d.tipo_guarda ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Tipo de Guarda</span><br><strong style="font-size:11px;">${d.tipo_guarda}</strong></div>` : '';
    }
    
    // UNIÃO ESTÁVEL
    if (tipo === 'uniao_estavel') {
        camposExtras += d.declarante1 ? `<div><span style="font-size:7px;text-transform:uppercase;color:#C02669;font-weight:700;">💑 Declarante 1</span><br><strong style="font-size:12px;">${d.declarante1}</strong></div>` : '';
        camposExtras += d.cpf_declarante1 ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF</span><br><strong style="font-size:11px;">${d.cpf_declarante1}</strong></div>` : '';
        camposExtras += d.declarante2 ? `<div><span style="font-size:7px;text-transform:uppercase;color:#C02669;font-weight:700;">💑 Declarante 2</span><br><strong style="font-size:12px;">${d.declarante2}</strong></div>` : '';
        camposExtras += d.cpf_declarante2 ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF</span><br><strong style="font-size:11px;">${d.cpf_declarante2}</strong></div>` : '';
        camposExtras += d.data_uniao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Data da União</span><br><strong style="font-size:11px;">${d.data_uniao}</strong></div>` : '';
        camposExtras += d.regime_bens ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Regime de Bens</span><br><strong style="font-size:11px;">${d.regime_bens}</strong></div>` : '';
        camposExtras += d.cartorio_uniao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Cartório</span><br><strong style="font-size:11px;">${d.cartorio_uniao}</strong></div>` : '';
    }
    
    // PROCURAÇÃO PÚBLICA
    if (tipo === 'procuracao_publica') {
        camposExtras += d.outorgante ? `<div><span style="font-size:7px;text-transform:uppercase;color:#1351B4;font-weight:700;">📜 Outorgante</span><br><strong style="font-size:12px;">${d.outorgante}</strong></div>` : '';
        camposExtras += d.cpf_outorgante ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF Outorgante</span><br><strong style="font-size:11px;">${d.cpf_outorgante}</strong></div>` : '';
        camposExtras += d.procurador ? `<div><span style="font-size:7px;text-transform:uppercase;color:#E67E22;font-weight:700;">📜 Procurador</span><br><strong style="font-size:12px;">${d.procurador}</strong></div>` : '';
        camposExtras += d.cpf_procurador ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">CPF Procurador</span><br><strong style="font-size:11px;">${d.cpf_procurador}</strong></div>` : '';
        camposExtras += d.tipo_procuracao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Tipo</span><br><strong style="font-size:11px;">${d.tipo_procuracao}</strong></div>` : '';
        camposExtras += d.cartorio_procuracao ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Cartório</span><br><strong style="font-size:11px;">${d.cartorio_procuracao}</strong></div>` : '';
    }
    
    document.getElementById('modalContent').innerHTML = `
        <!-- NOME DO DOCUMENTO -->
        <div style="text-align:center;margin-bottom:16px;padding:20px 16px;background:linear-gradient(135deg, rgba(19,81,180,0.9), rgba(12,50,111,0.95)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=200&fit=crop') center/cover no-repeat;border-radius:12px;color:#fff;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background:rgba(0,0,0,0.3);z-index:0;"></div>
            <div style="position:relative;z-index:1;">
                <div style="font-size:9px;opacity:0.9;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">
                    <i class="fas fa-shield-alt"></i> Documento Oficial
                </div>
                <h3 style="font-size:16px;font-weight:800;margin:4px 0;color:#fff;">
                    ${d.tipo_nome || '📄 Documento'}
                </h3>
            </div>
        </div>
        
<!-- DADOS PRINCIPAIS + CAMPOS ESPECÍFICOS JUNTOS -->
<div style="background:#F8FAFC;border-radius:10px;padding:14px;margin-bottom:12px;border:1px solid #E5E7EB;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <!-- TITULAR + CPF NA MESMA LINHA -->
        <div style="grid-column:1/-1;">
            <span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Titular</span><br>
            <strong style="font-size:12px;">${d.titular || 'N/I'}</strong>
            ${d.cpf ? `<span style="font-size:9px;color:#666;margin-left:8px;background:#E8F0FE;padding:2px 8px;border-radius:4px;">CPF: ${d.cpf}</span>` : ''}
            ${d.rg ? `<span style="font-size:9px;color:#666;margin-left:4px;background:#F0FDF4;padding:2px 8px;border-radius:4px;">RG: ${d.rg}</span>` : ''}
        </div>
        
        <div>
            <span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Código</span><br>
            <span class="code-tag" style="font-size:10px;">${d.codigo}</span>
        </div>
        ${d.emissor ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Emissor</span><br><strong style="font-size:10px;">${d.emissor}</strong></div>` : ''}
        ${d.categoria ? `<div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Categoria</span><br><strong style="font-size:11px;">${d.categoria}</strong></div>` : ''}
        <div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Emissão</span><br><strong style="font-size:11px;">${d.data_emissao ? new Date(d.data_emissao).toLocaleDateString('pt-BR') : 'N/A'}</strong></div>
        <div><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Validade</span><br><strong style="font-size:11px;">${dv ? (dv.getFullYear() >= 2099 ? '♾️ Vitalício' : dv.toLocaleDateString('pt-BR')) : 'Indeterminada'}</strong></div>
        ${d.informacoes ? `<div style="grid-column:1/-1;"><span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Informações</span><br><strong style="font-size:10px;">${d.informacoes}</strong></div>` : ''}
        
        <!-- CAMPOS ESPECÍFICOS APARECEM DIRETO AQUI -->
        ${camposExtras}
    </div>
</div>
        <!-- STATUS DE VALIDAÇÃO COM DESIGN PREMIUM -->
        <div style="background:${exp ? 'linear-gradient(135deg, #FEF2F2, #FEE2E2)' : 'linear-gradient(135deg, #F0FDF4, #DCFCE7)'};border:2px solid ${exp ? '#EF4444' : '#22C55E'};border-radius:16px;padding:20px;margin-bottom:16px;text-align:center;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-20px;right:-20px;width:100px;height:100px;border-radius:50%;background:${exp ? 'rgba(239,68,68,0.1)' : 'rgba(34,197,94,0.1)'};z-index:0;"></div>
            <div style="position:absolute;bottom:-30px;left:-30px;width:80px;height:80px;border-radius:50%;background:${exp ? 'rgba(239,68,68,0.08)' : 'rgba(34,197,94,0.08)'};z-index:0;"></div>
            
            <div style="position:relative;z-index:1;">
                <div style="font-size:48px;margin-bottom:8px;color:${exp ? '#EF4444' : '#22C55E'};filter:drop-shadow(0 4px 6px ${exp ? 'rgba(239,68,68,0.3)' : 'rgba(34,197,94,0.3)'});">
                    <i class="fas fa-${exp ? 'times-circle' : 'check-circle'}"></i>
                </div>
                <h3 style="font-size:20px;font-weight:900;color:${exp ? '#991B1B' : '#166534'};margin-bottom:2px;letter-spacing:-0.5px;">
                    ${exp ? 'DOCUMENTO EXPIRADO' : 'DOCUMENTO VÁLIDO'}
                </h3>
                <p style="font-size:10px;color:${exp ? '#B91C1C' : '#15803D'};margin-bottom:10px;font-weight:500;">
                    ${exp ? 'Este documento já não possui mais validade' : 'Autenticado e verificado com sucesso'}
                </p>
                <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.8);padding:6px 14px;border-radius:20px;font-size:9px;color:#666;backdrop-filter:blur(5px);">
                    <i class="fas fa-clock"></i>
                    <span>Verificado em <strong>${new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'})}</strong> às <strong>${new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</strong></span>
                </div>
            </div>
        </div>

        <!-- QR CODE COM DESIGN ELEGANTE -->
        <div style="background:#fff;border:2px solid #E5E7EB;border-radius:16px;padding:16px;margin-bottom:16px;display:flex;align-items:center;gap:16px;">
            <div style="flex-shrink:0;">
                <div id="qrCodeContainer" style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:10px;padding:6px;box-shadow:0 2px 8px rgba(0,0,0,0.08);"></div>
            </div>
            <div style="flex:1;min-width:0;">
                <h4 style="font-size:11px;font-weight:700;color:#111;margin-bottom:4px;display:flex;align-items:center;gap:6px;">
                    <i class="fas fa-qrcode" style="color:#000;"></i> Código QR de Verificação
                </h4>
                <p style="font-size:8px;color:#666;margin-bottom:6px;line-height:1.4;">
                    Escaneie este código para verificar a autenticidade deste documento a qualquer momento
                </p>
                <div style="background:#F8FAFC;padding:6px 10px;border-radius:6px;border:1px dashed #E5E7EB;">
                    <p style="font-size:7px;color:#999;margin-bottom:2px;">CÓDIGO DO DOCUMENTO</p>
                    <p style="font-size:10px;font-weight:700;color:#111;font-family:monospace;">${d.codigo}</p>
                </div>
            </div>
        </div>

        <!-- SELO GOV.BR -->
        <div class="stamp-govbr">
            <div class="stamp-govbr-content">
                <div class="govbr-logo">
                    <span class="g">G</span><span class="o">O</span><span class="v">V</span><span class="dot">.</span><span class="b">B</span><span class="r">R</span>
                </div>
                <div class="stamp-label">Documento Autenticado</div>
            </div>
        </div>
        <div class="modal-btns">
            <button class="btn-close-m" onclick="fecharModal()">Fechar</button>
            <button class="btn-new-m" onclick="novaConsulta()">Nova Consulta</button>
        </div>`;
    
    showModal();
    
    setTimeout(() => {
        const qrContainer = document.getElementById('qrCodeContainer');
        if (qrContainer && typeof QRCode !== 'undefined') {
            qrContainer.innerHTML = '';
            new QRCode(qrContainer, {
                text: urlQR, width: 110, height: 110,
                colorDark: '#000000', colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.M
            });
        }
    }, 200);
}
    
function modalRastreamento(d) {
    document.getElementById('modalTitle').textContent = 'Acompanhamento';
    const etapas = d.etapas||d.rastreamento?.etapas||[];
    const ok = etapas.filter(e=>e.ok||e.concluida).length;
    const tot = etapas.length;
    const pct = tot>0?Math.round((ok/tot)*100):0;
    const urlQR = `${window.location.origin}/?codigo=${d.codigo}`;
    const tipo = d.tipo || '';
    
    let infoCardsHTML = '';
    
    // ALVARÁS E LICENÇAS
if (['alvara_vigilancia','alvara_funcionamento','alvara_bombeiros','licenca_geral'].includes(tipo)) {
    infoCardsHTML = `
        <div style="background:linear-gradient(135deg, #1e3a5f, #2c5282);border-radius:14px;padding:16px;margin-bottom:10px;color:#fff;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-15px;right:-15px;font-size:60px;opacity:0.1;">📋</div>
            <div style="position:relative;z-index:1;">
                <div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:0.8;margin-bottom:6px;">
                    <i class="fas fa-clipboard-list"></i> Dados do Alvará
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                    ${d.nome_titular_alvara ? `<div><span style="font-size:7px;opacity:0.7;">Titular</span><br><strong style="font-size:10px;">${d.nome_titular_alvara}</strong></div>` : ''}
                    ${d.cpf_cnpj_titular ? `<div><span style="font-size:7px;opacity:0.7;">CPF/CNPJ Titular</span><br><strong style="font-size:10px;">${d.cpf_cnpj_titular}</strong></div>` : ''}
                    ${d.endereco_titular ? `<div style="grid-column:1/-1;"><span style="font-size:7px;opacity:0.7;">Endereço Titular</span><br><strong style="font-size:9px;">${d.endereco_titular}</strong></div>` : ''}
                    ${d.cnpj ? `<div><span style="font-size:7px;opacity:0.7;">CNPJ</span><br><strong style="font-size:10px;">${d.cnpj}</strong></div>` : ''}
                    ${d.processo ? `<div><span style="font-size:7px;opacity:0.7;">Processo</span><br><strong style="font-size:10px;">${d.processo}</strong></div>` : ''}
                    ${d.tipo_alvara ? `<div><span style="font-size:7px;opacity:0.7;">Tipo</span><br><strong style="font-size:10px;">${d.tipo_alvara}</strong></div>` : ''}
                </div>
            </div>
        </div>
        
        <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:10px;padding:10px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
            <div style="width:32px;height:32px;background:#7B2CBF;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;">
                <i class="fas fa-building"></i>
            </div>
            <div>
                <span style="font-size:7px;color:#999;text-transform:uppercase;">Órgão Emissor</span><br>
                <strong style="font-size:10px;">${d.emissor || 'N/I'}</strong>
            </div>
        </div>
        
        ${d.endereco_orgao ? `
        <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:10px;padding:10px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
            <div style="width:32px;height:32px;background:#7B2CBF;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
                <span style="font-size:7px;color:#999;text-transform:uppercase;">Endereço do Órgão</span><br>
                <strong style="font-size:10px;">${d.endereco_orgao}</strong>
            </div>
        </div>` : ''}
        
        ${d.validade_alvara ? `
        <div style="background:#FFF8E1;border:2px solid #FFE082;border-radius:10px;padding:10px;text-align:center;margin-bottom:10px;">
            <span style="font-size:8px;color:#E67E22;">📅 Validade do Alvará</span><br>
            <strong style="font-size:11px;color:#E67E22;">${d.validade_alvara}</strong>
        </div>` : ''}
    `;
}
    
// VEÍCULOS - Transferência
if (tipo === 'transferencia_veiculo') {
    infoCardsHTML = `
        <div style="background:linear-gradient(135deg, #1e3a5f, #2c5282);border-radius:14px;padding:16px;margin-bottom:10px;color:#fff;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-15px;right:-15px;font-size:60px;opacity:0.1;">🚗</div>
            <div style="position:relative;z-index:1;">
                <div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:0.8;margin-bottom:6px;">
                    <i class="fas fa-car"></i> Dados do Veículo
                </div>
                ${d.placa_veiculo ? `
                <div style="background:rgba(255,255,255,0.15);display:inline-block;padding:6px 14px;border-radius:8px;margin-bottom:8px;backdrop-filter:blur(5px);">
                    <span style="font-size:7px;opacity:0.7;display:block;">PLACA</span>
                    <strong style="font-size:18px;font-family:monospace;letter-spacing:2px;">${d.placa_veiculo}</strong>
                </div>` : ''}
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                    ${d.crlv ? `<div><span style="font-size:7px;opacity:0.7;">CRLV Digital</span><br><strong style="font-size:10px;">${d.crlv}</strong></div>` : ''}
                    ${d.modelo_veiculo ? `<div><span style="font-size:7px;opacity:0.7;">Modelo</span><br><strong style="font-size:10px;">${d.modelo_veiculo}</strong></div>` : ''}
                    ${d.ano_veiculo ? `<div><span style="font-size:7px;opacity:0.7;">Ano</span><br><strong style="font-size:10px;">${d.ano_veiculo}</strong></div>` : ''}
                    ${d.cor_veiculo ? `<div><span style="font-size:7px;opacity:0.7;">Cor</span><br><strong style="font-size:10px;">${d.cor_veiculo}</strong></div>` : ''}
                </div>
            </div>
        </div>
        
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
            <div style="background:#FFF5F5;border:2px solid #FECACA;border-radius:12px;padding:12px;">
                <div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;color:#DC2626;font-weight:700;margin-bottom:6px;">
                    <i class="fas fa-user"></i> PROPRIETÁRIO ATUAL
                </div>
                ${d.antigo_dono ? `<div style="margin-bottom:4px;"><span style="font-size:7px;color:#999;">Nome</span><br><strong style="font-size:10px;color:#111;">${d.antigo_dono}</strong></div>` : ''}
                ${d.cpf_antigo ? `<div><span style="font-size:7px;color:#999;">CPF</span><br><strong style="font-size:10px;color:#111;">${d.cpf_antigo}</strong></div>` : ''}
            </div>
            
            <div style="background:#F0FDF4;border:2px solid #BBF7D0;border-radius:12px;padding:12px;">
                <div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;color:#16A34A;font-weight:700;margin-bottom:6px;">
                    <i class="fas fa-user-check"></i> NOVO PROPRIETÁRIO
                </div>
                ${d.novo_dono ? `<div style="margin-bottom:4px;"><span style="font-size:7px;color:#999;">Nome</span><br><strong style="font-size:10px;color:#111;">${d.novo_dono}</strong></div>` : ''}
                ${d.cpf_novo ? `<div><span style="font-size:7px;color:#999;">CPF</span><br><strong style="font-size:10px;color:#111;">${d.cpf_novo}</strong></div>` : ''}
            </div>
        </div>
        
        ${d.endereco_detran ? `
        <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:10px;padding:10px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
            <div style="width:32px;height:32px;background:#1351B4;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;">
                <i class="fas fa-building"></i>
            </div>
            <div>
                <span style="font-size:7px;color:#999;text-transform:uppercase;">DETRAN Responsável</span><br>
                <strong style="font-size:10px;">${d.endereco_detran}</strong>
            </div>
        </div>` : ''}
    `;
}
    
    // DOCUMENTOS PESSOAIS
    if (['rg','cnh','certidao_nascimento','certidao_casamento','certidao_obito','titulo_eleitor'].includes(tipo)) {
        infoCardsHTML = `
            <div style="background:linear-gradient(135deg, #1e3a5f, #2c5282);border-radius:14px;padding:16px;margin-bottom:10px;color:#fff;position:relative;overflow:hidden;">
                <div style="position:absolute;top:-15px;right:-15px;font-size:60px;opacity:0.1;">🆔</div>
                <div style="position:relative;z-index:1;">
                    <div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:0.8;margin-bottom:6px;">
                        <i class="fas fa-id-card"></i> Dados do Documento
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                        ${d.cpf ? `<div><span style="font-size:7px;opacity:0.7;">CPF</span><br><strong style="font-size:10px;">${d.cpf}</strong></div>` : ''}
                        ${d.rg ? `<div><span style="font-size:7px;opacity:0.7;">RG</span><br><strong style="font-size:10px;">${d.rg}</strong></div>` : ''}
                        ${d.nascimento ? `<div><span style="font-size:7px;opacity:0.7;">Nascimento</span><br><strong style="font-size:10px;">${d.nascimento}</strong></div>` : ''}
                        ${d.orgao_emissor || d.emissor ? `<div><span style="font-size:7px;opacity:0.7;">Órgão Emissor</span><br><strong style="font-size:10px;">${d.orgao_emissor || d.emissor}</strong></div>` : ''}
                        ${d.categoria_cnh ? `<div><span style="font-size:7px;opacity:0.7;">Categoria CNH</span><br><strong style="font-size:10px;">${d.categoria_cnh}</strong></div>` : ''}
                        ${d.endereco_orgao ? `<div><span style="font-size:7px;opacity:0.7;">Endereço</span><br><strong style="font-size:9px;">${d.endereco_orgao}</strong></div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
    // EDUCAÇÃO
if (['certificado_ensino_medio','certificado_ensino_fundamental','ensino_medio_sesi',
     'ensino_fundamental_sesi','ensino_fund_medio_sesi','declaracao_escolaridade',
     'diploma_superior','senai_certificado','sesi_curso','senac_curso'].includes(tipo)) {
    infoCardsHTML = `
        <div style="background:linear-gradient(135deg, #1e3a5f, #2c5282);border-radius:14px;padding:16px;margin-bottom:10px;color:#fff;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-15px;right:-15px;font-size:60px;opacity:0.1;">🎓</div>
            <div style="position:relative;z-index:1;">
                <div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:0.8;margin-bottom:6px;">
                    <i class="fas fa-graduation-cap"></i> Dados do Aluno
                </div>
                ${d.nome_aluno ? `<div style="margin-bottom:6px;"><span style="font-size:7px;opacity:0.7;">Aluno</span><br><strong style="font-size:12px;">${d.nome_aluno}</strong></div>` : ''}
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                    ${d.cpf_aluno ? `<div><span style="font-size:7px;opacity:0.7;">CPF</span><br><strong style="font-size:10px;">${d.cpf_aluno}</strong></div>` : ''}
                    ${d.rg_aluno ? `<div><span style="font-size:7px;opacity:0.7;">RG</span><br><strong style="font-size:10px;">${d.rg_aluno}</strong></div>` : ''}
                    ${d.nascimento_aluno ? `<div><span style="font-size:7px;opacity:0.7;">Nascimento</span><br><strong style="font-size:10px;">${d.nascimento_aluno}</strong></div>` : ''}
                </div>
            </div>
        </div>
        
        <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:10px;padding:10px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
            <div style="width:32px;height:32px;background:#1351B4;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;">
                <i class="fas fa-school"></i>
            </div>
            <div>
                <span style="font-size:7px;color:#999;text-transform:uppercase;">Instituição</span><br>
                <strong style="font-size:10px;">${d.instituicao || 'N/I'}</strong>
            </div>
        </div>
        
        ${d.curso ? `
        <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:10px;padding:10px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
            <div style="width:32px;height:32px;background:#1351B4;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;">
                <i class="fas fa-book"></i>
            </div>
            <div>
                <span style="font-size:7px;color:#999;text-transform:uppercase;">Curso</span><br>
                <strong style="font-size:10px;">${d.curso}</strong>
            </div>
        </div>` : ''}
    `;
}
    // TIMELINE COM LINHAS CONECTANDO
    let timelineHTML = `
        <div style="position:relative;padding-left:30px;">
            <!-- Linha principal -->
            <div style="position:absolute;left:13px;top:0;bottom:0;width:2px;background:#E5E7EB;z-index:0;"></div>
    `;
    
    etapas.forEach((e, i) => {
        const isDone = e.ok || e.concluida;
        const isLast = i === etapas.length - 1;
        
        timelineHTML += `
            <div style="position:relative;z-index:1;margin-bottom:${isLast ? '0' : '16px'};">
                <!-- Círculo -->
                <div style="position:absolute;left:-30px;top:4px;width:28px;height:28px;border-radius:50%;background:${isDone ? '#22C55E' : '#fff'};border:3px solid ${isDone ? '#22C55E' : '#D1D5DB'};display:flex;align-items:center;justify-content:center;z-index:2;box-shadow:0 2px 8px ${isDone ? 'rgba(34,197,94,0.3)' : 'rgba(0,0,0,0.05)'};">
                    ${isDone ? '<i class="fas fa-check" style="color:#fff;font-size:10px;"></i>' : '<i class="fas fa-circle" style="color:#D1D5DB;font-size:6px;"></i>'}
                </div>
                
                <!-- Card da etapa -->
                <div style="background:${isDone ? '#F0FDF4' : '#fff'};border:2px solid ${isDone ? '#BBF7D0' : '#E5E7EB'};border-radius:10px;padding:10px 12px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <strong style="font-size:10px;color:${isDone ? '#166534' : '#111'};">${e.nome}</strong>
                        ${isDone ? '<span style="font-size:8px;color:#22C55E;font-weight:700;background:#DCFCE7;padding:2px 8px;border-radius:10px;">✓</span>' : '<span style="font-size:8px;color:#999;font-weight:500;background:#F3F4F6;padding:2px 8px;border-radius:10px;">⏳</span>'}
                    </div>
                    <span style="font-size:8px;color:${isDone && e.data ? '#166534' : '#999'};display:block;margin-top:2px;">
                        ${isDone && e.data ? `📅 ${e.data}` : 'Aguardando...'}
                    </span>
                </div>
            </div>
        `;
    });
    
    timelineHTML += `</div>`;
    
    document.getElementById('modalContent').innerHTML = `
        <div style="text-align:center;margin-bottom:16px;padding:20px 16px;background:linear-gradient(135deg, rgba(242,140,40,0.9), rgba(230,126,34,0.95)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=200&fit=crop') center/cover no-repeat;border-radius:14px;color:#fff;position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background:rgba(0,0,0,0.3);z-index:0;"></div>
            <div style="position:relative;z-index:1;">
                <div style="font-size:9px;opacity:0.9;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">
                    <i class="fas fa-clock"></i> Em Andamento
                </div>
                <h3 style="font-size:16px;font-weight:800;margin:4px 0;color:#fff;">
                    ${d.tipo_nome||'📄 Documento'}
                </h3>
            </div>
        </div>
        
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;background:#F8FAFC;border-radius:10px;padding:12px;border:1px solid #E5E7EB;">
            <div style="flex:1;">
                <span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Titular</span><br>
                <strong style="font-size:13px;">${d.titular}</strong>
            </div>
            <div style="text-align:right;">
                <span style="font-size:7px;text-transform:uppercase;color:#999;font-weight:700;">Código</span><br>
                <span class="code-tag" style="font-size:11px;">${d.codigo}</span>
            </div>
        </div>
        
        ${infoCardsHTML}
        
        <!-- ETAPAS COM TIMELINE -->
        <div style="background:#F8FAFC;border-radius:12px;padding:14px;border:1px solid #E5E7EB;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <h4 style="font-size:11px;font-weight:700;color:#111;">
                    <i class="fas fa-route" style="color:#E67E22;"></i> Etapas do Processo
                </h4>
                <span style="font-size:9px;font-weight:700;color:#E67E22;background:#FFF8E1;padding:3px 10px;border-radius:10px;">${pct}%</span>
            </div>
            
            <div style="background:#E5E7EB;border-radius:10px;height:6px;margin-bottom:16px;overflow:hidden;">
                <div style="background:linear-gradient(90deg, #E67E22, #F28C28);height:100%;border-radius:10px;width:${pct}%;transition:width 0.5s;"></div>
            </div>
            
            ${timelineHTML}
        </div>
        
        ${d.prev||d.previsao_entrega?`
        <div style="background:#FFF8E1;border:2px solid #FFE082;border-radius:10px;padding:10px;text-align:center;margin-bottom:12px;">
            <span style="font-size:8px;color:#E67E22;">📦 Previsão de Entrega</span><br>
            <strong style="font-size:11px;color:#E67E22;">${d.prev||d.previsao_entrega}</strong>
        </div>`:''}
        
        <div style="background:#fff;border-radius:12px;padding:14px;text-align:center;border:2px solid #000;margin-bottom:12px;">
            <p style="font-size:9px;font-weight:700;color:#000;margin-bottom:8px;">
                <i class="fas fa-qrcode"></i> QR Code para Acompanhamento
            </p>
            <div id="qrCodeContainer" style="display:inline-block;padding:6px;background:#fff;border-radius:8px;"></div>
        </div>
        
        <div class="modal-btns">
            <button class="btn-close-m" onclick="fecharModal()">Fechar</button>
            <button class="btn-new-m" onclick="novaConsulta()">Nova Consulta</button>
        </div>`;
    
    showModal();
    
    setTimeout(() => {
        const qrContainer = document.getElementById('qrCodeContainer');
        if (qrContainer && typeof QRCode !== 'undefined') {
            qrContainer.innerHTML = '';
            new QRCode(qrContainer, {
                text: urlQR, width: 110, height: 110,
                colorDark: '#000000', colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.M
            });
        }
    }, 200);
}
    
    function showModal() { document.getElementById('modalValidacao').style.display='flex'; document.body.style.overflow='hidden'; }
    function fecharModal() { document.getElementById('modalValidacao').style.display='none'; document.body.style.overflow=''; }
    function novaConsulta() { fecharModal(); setTimeout(()=>{ irParaConsulta(); setTimeout(()=>{document.getElementById('codigoInput').value='';document.getElementById('codigoInput').focus();},400); },200); }
    
    let fs=0;
    function ajustarFonte(d) { fs=Math.max(-2,Math.min(4,fs+d)); document.documentElement.style.fontSize=[12,14,16,18,20,22,24][fs+2]+'px'; }
    function toggleContraste() {
        document.body.classList.toggle('hc');
        document.body.style.background = document.body.classList.contains('hc')?'#000':'';
        document.body.style.color = document.body.classList.contains('hc')?'#FFF':'';
        document.body.style.filter = document.body.classList.contains('hc')?'contrast(1.5)':'';
    }
    
    document.getElementById('modalValidacao').addEventListener('click',function(e){if(e.target===this)fecharModal();});
    document.getElementById('codigoInput').addEventListener('keypress',function(e){if(e.key==='Enter')consultarDocumento();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')fecharModal();});
    document.querySelectorAll('.nav-bar a').forEach(l=>{l.addEventListener('click',function(e){e.preventDefault();document.querySelectorAll('.nav-bar a').forEach(x=>x.classList.remove('active'));this.classList.add('active');document.getElementById(this.dataset.target)?.scrollIntoView({behavior:'smooth'});});});
    
    (function(){const p=new URLSearchParams(location.search);const c=p.get('codigo');if(c){document.getElementById('codigoInput').value=c;setTimeout(consultarDocumento,600);}})();
    
  // Chamar no carregamento
renderizarInstituicoes();
    carregarDocumentos();
    console.log('✅ GOV.BR — 7 documentos com solicitação e rastreamento!');
</script>
</body>
</html>