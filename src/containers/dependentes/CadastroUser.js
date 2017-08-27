import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const CadastroUser = (props) => {
    return (
        <form onSubmit={props.onFormSubmit}>
            <div className="col-md-12">
                <TextField
                    name="nome"
                    label="Nome"
                    value={props.nome}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="sobrenome"
                    label="Sobrenome"
                    value={props.sobrenome}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="cpf"
                    label="CPF"
                    value={props.cpf}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="dataNascimento"
                    label="Data Nascimento"
                    value={props.dataNascimento}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="email"
                    label="Email"
                    value={props.email}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="telResidencial"
                    label="Telefone Residencial"
                    value={props.telResidencial}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="telCelular"
                    label="Celular"
                    value={props.telCelular}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="cep"
                    label="Cep"
                    value={props.cep}
                    onChange={props.onChange}
                    fullWidth
                />
                <TextField
                    name="logradouro"
                    label="Logradouro"
                    value={props.logradouro}
                    onChange={props.onChange}
                    fullWidth
                />
            </div>
            <Button onClick={this.handleRequestClose} color="accent">
                Cancelar
            </Button>
            <Button color="primary" type="submit">
                Cadastrar
            </Button>
        </form>
    );
};

export default CadastroUser;