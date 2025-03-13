#!/bin/bash

# Copiar o arquivo de configuração do npm específico para o Vercel
cp .npmrc.vercel .npmrc

# Instalar dependências com as flags necessárias
npm install --legacy-peer-deps

# Construir o projeto
CI=false npm run build 