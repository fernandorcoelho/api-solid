# App

Gympass style app.

## RFs (Requisitos Funcionais)
[x] Deve ser possível se cadastrar; <br />
[x] Deve ser possível se autenticar; <br />
[x] Deve ser possível obter o perfil de um usuário logado; <br />
[x] Deve ser possível obter o número de check-ins realizados pelo usuário logado; <br />
[x] Deve ser possível o usuário obter seu histórico de check-ins; <br />
[x] Deve ser possível o usuário buscar academias próximas (até 10km); <br />
[x] Deve ser possível o usuário buscar academias pelo nome; <br />
[x] Deve ser possível o usuário realizar check-in em uma academia; <br />
[x] Deve ser possível validar o check-in de um usuário; <br />
[x] Deve ser possível cadastrar uma academia.

## RNs (Regras de Negócio)
[x] O usuário não deve poder se cadastrar com um email duplicado; <br />
[x] O usuário não pode fazer 2 check-ins no mesmo dia; <br />
[x] O usuário não pode fazer check-in se não estiver perto (100m) da academia; <br />
[] O check-in só pode ser validado até 20 minutos após criado; <br />
[] O check-in só pode ser validado por administradores; <br />
[] A academia só pode ser cadastrada por administradores.

## RNFs (Requisitos não-funcionais)
[x] A senha do usuário precisa estar criptografada; <br />
[x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL; <br />
[x] Todas listas de dados precisam estar paginadas com 20 itens por página; <br />
[] O usuário deve ser identificado por um JWT.