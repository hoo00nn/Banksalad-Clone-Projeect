import { $ } from '@lib/common';
import getTemplate from '@templates/account-input-form';
import AccountInputFormEvent from '@events/account-input-form';
import accountInputFormModel from '@models/account-input-form';
import accountTabModel from '@models/account-tab';
import accountListModel from '@models/account-list';

class AccountInputFormView {
  constructor(rootElement) {
    this.model = accountInputFormModel;
    this.$element = rootElement;
    this.onEvent();

    this.model.subscribe('stateChange', this.rerender.bind(this));
    accountTabModel.subscribe('stateChange', this.rerender.bind(this));
    accountListModel.subscribe('stateChange', this.rerender.bind(this));
  }

  async render() {
    await this.model.initState();
    return getTemplate(this.model.getState());
  }

  rerender() {
    const $element = $('.option-tab');
    const $accountOptionNode = $('.account-option');
    const html = getTemplate(this.model.getState());

    $accountOptionNode.remove();
    $element.insertAdjacentHTML('afterend', html);
  }

  onEvent() {
    new AccountInputFormEvent(this.$element, this.model).init();
  }
}

export default AccountInputFormView;
