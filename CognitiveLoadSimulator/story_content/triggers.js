function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6izuk1NPsqs":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6q6ekw21xdr');
const duration = 1250;
const easing = 'ease-out';
const id = '67Pl9aQNeMO';
const pulseAmount = 0.07;
const delay = 5000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
