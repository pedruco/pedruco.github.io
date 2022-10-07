<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/style.css" />
    <script src="../JS/scripts.js" defer> </script>
    <title>Formulário</title>
</head>
<body>
    <header>  
        <h1>Cadastro</h1>
    </header>

<?php
if($_SERVER["REQUEST_METHOD"] === "POST") {   

if (empty ($_POST["nome"])){
    echo "<div class='resp'>Insira seu nome.</div>";
}elseif (!preg_match("/^[^\s][a-zA-ZÀ-ú ]*/",$_POST['nome'])){
    echo "<div class='resp'>Seu nome deve conter apenas letras e espaços.</div>";
}

if (empty ($_POST["nasc"])){
    echo "<div class='resp'>Insira sua data de nascimento.</div>";
}elseif( time() < strtotime('0 years', strtotime($_POST['nasc']))){
    echo "<div class='resp'>Você ainda não nasceu.</div>";
}elseif( time() < strtotime('+18 years', strtotime($_POST['nasc']))){
    echo '<div class="resp">Você precisa ser de maior.</div>';
}elseif(  time() > strtotime('+130 years', strtotime($_POST['nasc']))){
    echo '<div class="resp">Você precisa ser de maior mas não exagere na sua idade.</div>';
}

    function validateCPF($cpf){   
        // Canonicalize input
        $cpf = sprintf('%011s', preg_replace('{\D}', '', $cpf));
        // Validate length and invalid numbers
        if ((strlen($cpf) != 11)
                || ($cpf == '00000000000')
                || ($cpf == '99999999999')) {
            return false;
        }
        // Validate check digits using a modulus 11 algorithm
        for ($t = 8; $t < 10;) {
            for ($d = 0, $p = 2, $c = $t; $c >= 0; $c--, $p++) {
                $d += $cpf[$c] * $p;
            }

            if ($cpf[++$t] != ($d = ((10 * $d) % 11) % 10)) {
                return false;
            }
        }
        return true;
    }

if (empty($_POST["cpf"])){
    echo "<div class='resp'>Insira seu CPF.</div>";
}elseif(!validateCPF($_POST["cpf"])){  
    echo "<div class='resp'>CPF inválido.</div>";  
}

if(empty($_POST["tel"])){
    echo "<div class='resp'>Insira seu número de telefone.</div>";
} elseif(strlen($_POST['tel']) < 14 || strlen($_POST['tel']) > 15){
    echo "<div class='resp'>Seu número de telefone precisa ter no mínimo 10 e no máximo 11 dígitos (utilize apenas números).</div>";
}

if (empty ($_POST["email"])){
    echo "<div class='resp'>Insira seu email.</div>";
}elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
    echo "<div class='resp'>Você digitou algo que não é um email.</div>";
}

if(empty($_POST["senha"])){
    echo "<div class='resp'>Crie uma senha.</div>";
} elseif(!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/", $_POST['senha'])){
    echo "<div class='resp'>Sua senha deve conter no mínimo 8 caracteres, no máximo 12 caracteres, pelos menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&*_=+-).</div>";
}

if (empty ($_POST['gen'])) {
    echo "<div class='resp'>Selecione uma das opções de gênero.</div>";
}

if (empty ($_POST['estado'])) {
    echo "<div class='resp'>Selecione um item da lista de estado civil.</div>";
}

echo (empty($_POST["termos"])) ? "<div class='resp'>Aceite os termos para concluir o agendamento da sua consulta.</div>" : "" ;

}
?>

<div id="div1">

    <form action="<?=$_SERVER['PHP_SELF']?>" method="POST" id="formcad">

        <div id="form">

        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome" class="input2" placeholder="Seu Nome" pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" required value="<?=htmlspecialchars(isset($_POST['nome'])?$_POST['nome']:'');?>"/>
        <label for="nasc">Data de nascimento:</label>
        <input type="date" name="nasc" id="nasc" class="input2" required value="<?=htmlspecialchars(isset($_POST['nasc'])?$_POST['nasc']:'');?>"/>
        <label for="cpf">CPF:</label>
        <input type="text" name="cpf" id="cpf" class="input2" minlength="14" maxlength="14" placeholder="Ex:111.111.111-11" required value="<?=htmlspecialchars(isset($_POST['cpf'])?$_POST['cpf']:'');?>"/>
        <label for="tel">Telefone:</label>
        <input type="tel" name="tel" id="tel" class="input2" minlength="14" maxlength="15" placeholder="Ex:(47) 99999-9999" required value="<?=htmlspecialchars(isset($_POST['tel'])?$_POST['tel']:'');?>"/>
        <label for="email">E-mail:</label>
        <input type="email" name="email" id="email" class="input2" placeholder="Ex:seuemail@gmail.com" pattern="^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$" required value="<?=htmlspecialchars(isset($_POST['email'])?$_POST['email']:'');?>"/>
        <label for="senha">Senha:</label>
        <input type="password" name="senha" id="senha" class="input2" placeholder="Informe sua senha" minlength="8" maxlength="12" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" required value="<?=htmlspecialchars(isset($_POST['senha'])?$_POST['senha']:'');?>"/>
        <label>Gênero:</label> 
        <div class="resposta">
        <label>
        <input type="radio" name="gen" value="masc" required <?php if(isset($_POST['gen']) && $_POST['gen'] == 'masc'): ?> checked <?php endif ?> />
        Masculino
        </label>
        <label>
        <input type="radio" name="gen" value="fem" <?php if(isset($_POST['gen']) && $_POST['gen'] == 'fem'): ?> checked <?php endif ?> />
        Feminino
        </label>
        <label>
        </label>
        </div>
        <label for="estado">Estado Civil:</label>
	    <select id="estado" name="estado" required>
            <option value="" disabled selected>Nenhum</option>
		    <option value="solt" <?php if(isset($_POST['estado']) && $_POST['estado'] == 'solt'): ?> selected <?php endif ?>>Solteiro</option>
		    <option value="casa" <?php if(isset($_POST['estado']) && $_POST['estado'] == 'casa'): ?> selected <?php endif ?>>Casado</option>
		    <option value="viuv" <?php if(isset($_POST['estado']) && $_POST['estado'] == 'viuv'): ?> selected <?php endif ?>>Viúvo</option>
	    </select>
        <label for="conshora">Horário:</label>
        <input type="time" name="conshora" id="conshora" class="input2" required value="<?=htmlspecialchars(isset($_POST['conshora'])?$_POST['conshora']:'');?>"/>
        <label for="termos" id="licenca">Aceito os termos e licenças de uso e política de privacidade</label>
        <input type="checkbox" name="termos" id="termos" required />
        </div>
        <input type="submit" value="Enviar" class="btn-pesq" id="botao"/>
    </form>
</div>

</body>
</html>