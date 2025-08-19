function clickLoadDiffButtons() {
    const buttons = document.querySelectorAll('.load-diff-button');
    if (buttons.length === 0) {
        alert('load diff が見つかりません');
    } else {
        alert('loading...');
        buttons.forEach(node => node.click());
        alert('すべての load ボタンを押しました!!!');
    }
}

// ボタンクリックなどで呼び出す
clickLoadDiffButtons();