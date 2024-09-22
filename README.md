## Chrome Extension - Fechar Guias, Limpar Histórico e Abrir Página

Extensão para Google Chrome que fecha todas as guias, limpa o histórico dos últimos 15 minutos e abre uma página configurada pelo usuário.

## Instalação

1. Clone o repositório:
   git clone https://github.com/GuilhermeCeub/Sistematiza-o-Engenharia-Software

2. Abra o Chrome e vá para chrome://extensions/

3. Ative o Modo Desenvolvedor.

4. Clique em "Carregar sem compactação" e selecione a pasta do projeto.

## Uso

## Executar a Extensão via Popup

1. Clique no ícone da extensão na barra de ferramentas do Chrome para abrir o popup.
   
2. Clique no botão "I did it again" para executar a ação.

3. O esperado é que todas as guias abertas sejam fechadas.
 
4. O histórico dos últimos 15 minutos seja limpo.

5. A URL configurada na página de opções (ou o valor padrão https://www.uol.com.br) seja aberta.

## Testar o Atalho de Teclado
 
1. Pressione Ctrl+Shift+L para acionar a extensão via atalho de teclado.

2. O mesmo comportamento (fechar guias, limpar histórico e abrir a URL) deve ocorrer.

## Depuração

1. Se algo não funcionar como esperado, abra o Console do Chrome (Ctrl+Shift+J ou Cmd+Option+J no macOS) e verifique se há mensagens de erro.

2. Também pode abrir chrome://extensions/, clicar em Service Worker na sua extensão e abrir a aba de depuração do Service Worker para verificar logs ou erros.

## Equipe

- Arthur Santos de Araújo
- Guilherme Amor Laurentino
- Henrique Oliveira Barbosa
- Marcos Adriano dos Santos
- Maria Eduarda Messias
