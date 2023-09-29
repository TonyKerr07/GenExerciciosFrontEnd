function validar() {
    if (document.cadastro.nome.value === "") {
        window.alert("O campo Nome é obrigatório!");
        document.cadastro.nome.focus();
        return false;
    }
    if (document.cadastro.email.value === "") {
        window.alert("O campo E-mail é obrigatório!");
        document.cadastro.email.focus();
        return false;
    }
    if (document.cadastro.data_nascimento.value === "") {
        window.alert("O campo Data de Nascimento é obrigatório!");
        document.cadastro.data_nascimento.focus();
        return false;
    }
    if (!document.cadastro.genero[0].checked && !document.cadastro.genero[1].checked && !document.cadastro.genero[2].checked && !document.cadastro.genero[3].checked) {
        window.alert("Selecione uma opção no campo Gênero!");
        return false;
    }
    if (!document.cadastro.civil[0].checked && !document.cadastro.civil[1].checked && !document.cadastro.civil[2].checked && !document.cadastro.civil[3].checked) {
        window.alert("Selecione uma opção no campo Estado Civil!");
        return false;
    }
    if (document.cadastro.telefone.value === "") {
        window.alert("O campo Telefone de Contato é obrigatório!");
        document.cadastro.telefone.focus();
        return false;
    }
    if (document.cadastro.resumo.value === "") {
        window.alert("O campo Resumo Profissional é obrigatório!");
        document.cadastro.resumo.focus();
        return false;
    }
    if (document.cadastro.empresa1.value === "") {
        window.alert("O campo Nome da Empresa (Experiência Profissional) é obrigatório!");
        document.cadastro.empresa1.focus();
        return false;
    }
    if (document.cadastro.cargo1.value === "") {
        window.alert("O campo Cargo (Experiência Profissional) é obrigatório!");
        document.cadastro.cargo1.focus();
        return false;
    }
    if (document.cadastro.data_admissao1.value === "") {
        window.alert("O campo Data de Admissão (Experiência Profissional) é obrigatório!");
        document.cadastro.data_admissao1.focus();
        return false;
    }
    if (document.cadastro.data_desligamento1.value === "") {
        window.alert("O campo Data de Desligamento (Experiência Profissional) é obrigatório!");
        document.cadastro.data_desligamento1.focus();
        return false;
    }
    if (document.cadastro.descricao1.value === "") {
        window.alert("O campo Descrição das Atividades (Experiência Profissional) é obrigatório!");
        document.cadastro.descricao1.focus();
        return false;
    }
    if (document.cadastro.instituicao1.value === "") {
        window.alert("O campo Nome da Instituição (Formação Acadêmica) é obrigatório!");
        document.cadastro.instituicao1.focus();
        return false;
    }
    if (!document.cadastro.nivel_ensino1[0].checked && !document.cadastro.nivel_ensino1[1].checked && !document.cadastro.nivel_ensino1[2].checked) {
        window.alert("Selecione uma opção no campo Nível de Ensino (Formação Acadêmica)!");
        return false;
    }
    if (document.cadastro.curso1.value === "") {
        window.alert("O campo Nome do Curso (Formação Acadêmica) é obrigatório!");
        document.cadastro.curso1.focus();
        return false;
    }
    if (document.cadastro.data_termino1.value === "") {
        window.alert("O campo Data de Previsão de Término (Formação Acadêmica) é obrigatório!");
        document.cadastro.data_termino1.focus();
        return false;
    }
    if (document.cadastro.competencias.value === "") {
        window.alert("O campo Competências é obrigatório!");
        document.cadastro.competencias.focus();
        return false;
    }
    if (!document.cadastro.viagem[0].checked && !document.cadastro.viagem[1].checked) {
        window.alert("Selecione uma opção no campo Disponibilidade para Viajar!");
        return false;
    }
    if (document.cadastro.pretensao_salarial.value === "") {
        window.alert("Selecione uma opção no campo Pretensão Salarial!");
        return false;
    }
    if (document.cadastro.observacoes.value === "") {
        window.alert("O campo Observações Gerais é obrigatório!");
        document.cadastro.observacoes.focus();
        return false;
    }
    return true;

}