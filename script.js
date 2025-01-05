function calculateRetirement() {
    // 取得用戶輸入的值
    const currentAge = parseInt(document.getElementById("currentAge").value);
    const retirementAge = parseInt(document.getElementById("retirementAge").value);
    const monthlySavings = parseFloat(document.getElementById("monthlySavings").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    
    // 檢查是否有未填寫的欄位
    if (isNaN(currentAge) || isNaN(retirementAge) || isNaN(monthlySavings) || isNaN(interestRate)) {
        alert("請填寫所有欄位！");
        return;
    }

    // 計算年數與總儲蓄
    const yearsToSave = retirementAge - currentAge;
    const totalMonths = yearsToSave * 12;
    let totalAmount = 0;

    // 使用複利公式進行計算
    for (let i = 0; i < totalMonths; i++) {
        totalAmount += monthlySavings;
        totalAmount *= (1 + interestRate / 12); // 每月計算利息
    }

    // 顯示計算結果
    document.getElementById("result").textContent = totalAmount.toFixed(2);
}
