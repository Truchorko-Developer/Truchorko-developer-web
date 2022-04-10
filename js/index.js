/**Channel Logs */
let $logstatus = document.getElementById("logstatus");
let $logsshow = document.getElementById("showlogstatus");

if ($logstatus) {
  $logstatus.addEventListener("click", () => {
    $logsshow.classList.toggle("denystatus");
    $logsshow.classList.toggle("showstatus");
  });
}
/**Channel Ignore */
let $channelstatus = document.getElementById("channelstatus");
let $channelsshow = document.getElementById("showchannelstatus");

if ($channelstatus) {
  $channelstatus.addEventListener("click", () => {
    $channelsshow.classList.toggle("denystatus");
    $channelsshow.classList.toggle("showstatus");
  });
}
/**Channel Block */
let $blocktatus = document.getElementById("blocktatus");
let $blockshow = document.getElementById("showblocktatus");

if ($blocktatus) {
  $blocktatus.addEventListener("click", () => {
    $blockshow.classList.toggle("denystatus");
    $blockshow.classList.toggle("showstatus");
  });
}
/**Channel Sugerencias */
let $sugerenciastatus = document.getElementById("sugerenciastatus");
let $sugerenciasshow = document.getElementById("showsugerenciastatus");

if ($sugerenciastatus) {
  $sugerenciastatus.addEventListener("click", () => {
    $sugerenciasshow.classList.toggle("denystatus");
    $sugerenciasshow.classList.toggle("showstatus");
  });
}
/**Channel Confesiones */
let $confesionestatus = document.getElementById("confesionestatus");
let $confesionesshow = document.getElementById("showconfesionestatus");

if ($confesionestatus) {
  $confesionestatus.addEventListener("click", () => {
    $confesionesshow.classList.toggle("denystatus");
    $confesionesshow.classList.toggle("showstatus");
  });
}

let $nick = document.getElementById("nickstatus");
let $shownick = document.getElementById("shownickstatus");

if ($nick) {
  $nick.addEventListener("click", () => {
    $shownick.classList.toggle("denystatus");
    $shownick.classList.toggle("showstatus");
  });
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('si')
    })
    tabs.forEach(tab => {
      tab.classList.remove('si')
    })
    tab.classList.add('si')
    target.classList.add('si')
  })
})

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)

  if (headerToggle && navbarId) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      toggleBtn.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle', 'navbar')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');

  if (copyTest === true) {
    var copyTextArea = document.createElement("textarea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copiado!' : 'Whoops, no copiado!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, parece que no he conseguido copiar ese texto');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  } else {
    window.prompt("Copiar al Portapapeles: Ctrl+C p Command+C, Enter", text);
  }
}

$(document).ready(function () {
  $('.js-tooltip').tooltip();

  $('.js-copy').click(function () {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
  });
});

// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minsEl = document.getElementById("mins");
// const secondsEl = document.getElementById("seconds");

// function countdown() {
//   const totalsecounds = (new Date("18 Jan 2022") - new Date()) / 1000;
//   const days = Math.floor(totalsecounds / 3600 / 24);
//   const hours = Math.floor(totalsecounds / 3600) % 24;
//   const mins = Math.floor(totalsecounds / 60) % 60;
//   const seconds = Math.floor(totalsecounds) % 60;

//   daysEl.innerHTML = formatTime(days);
//   hoursEl.innerHTML = formatTime(hours);
//   minsEl.innerHTML = formatTime(mins);
//   secondsEl.innerHTML = formatTime(seconds);
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// countdown();

// setInterval(countdown, 1000);