<?php
session_start();

// Verifica se os dados foram submetidos via POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cpf = $_POST['username']; // Usando 'username' no formulário para o campo CPF
    $password = $_POST['password'];

    // Simulação de validação (substitua por sua lógica real)
    if ($cpf === '12345678901' && $password === '12345678') {
        // Login bem-sucedido
        $_SESSION['user_id'] = 1;
        $_SESSION['cpf'] = $cpf;
        $success_message = "Login realizado com sucesso!";
    } else {
        // Login falhou
        $error_message = "CPF ou senha inválidos.";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Geração Tech</title>
    <style>
        .message {
            color: green;
            margin-bottom: 10px;
            font-weight: bold;
        }
        .error-message {
            color: red;
            margin-bottom: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php if (!empty($success_message)): ?>
            <p class="message"><?php echo $success_message; ?></p>
        <?php endif; ?>

        <?php if (!empty($error_message)): ?>
            <p class="error-message"><?php echo $error_message; ?></p>
        <?php endif; ?>
    </div>
</body>
</html>
