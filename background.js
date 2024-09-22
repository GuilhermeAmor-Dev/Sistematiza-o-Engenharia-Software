chrome.commands.onCommand.addListener(function (command) {
  if (command === "execute-action") {
    // Fechar todas as guias abertas
    chrome.tabs.query({}, function (tabs) {
      for (let tab of tabs) {
        chrome.tabs.remove(tab.id);
      }
    });

    // Limpar o histórico dos últimos 15 minutos
    let fifteenMinutesAgo = new Date().getTime() - 15 * 60 * 1000;
    chrome.history.deleteRange({
      startTime: fifteenMinutesAgo,
      endTime: Date.now(),
    });

    // Abrir uma página escolhida pelo usuário
    chrome.storage.sync.get(["userUrl"], function (result) {
      let userUrl = result.userUrl || "https://www.uol.com.br";
      chrome.tabs.create({ url: userUrl });
    });
  }
});
