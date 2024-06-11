function skillsMember() {
  let member = document.querySelector('.member');
  let memberBtn = document.querySelector('.member__btn');
  let memberContent = document.querySelector('.member__content');
  let memberClose = document.querySelector('.member__close');
  let memberCloseBtn = document.querySelector('.member__close-btn');

  memberBtn.onclick = () => {
    memberContent.style.display = 'block';
    member.style.display = 'block';
  }

  memberClose.onclick = () => {
    memberContent.style.display = 'none';
    member.style.display = 'none';
  }

  memberCloseBtn.onclick = () => {
    memberContent.style.display = 'none';
    member.style.display = 'none';
  }
}