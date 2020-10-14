class AccountMonthPickerEvent {
  constructor(target, model) {
    this.$eventTarget = target;
    this.model = model;
  }

  init() {
    this.$eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.previous__button')) this.onclickPreviousButton();
    if (e.target.closest('.next__button')) this.onclickNextButton();
  }

  onclickPreviousButton() {
    const { monthPicker } = this.model.getState();
    const updateMonth = monthPicker.month === 1 ? 12 : monthPicker.month - 1;
    monthPicker.month = updateMonth;
    this.model.changeMonth(monthPicker);
  }

  onclickNextButton() {
    const { monthPicker } = this.model.getState();
    const updateMonth = monthPicker.month === 12 ? 1 : monthPicker.month + 1;
    monthPicker.month = updateMonth;
    this.model.changeMonth(monthPicker);
  }
}

export default AccountMonthPickerEvent;
