function openMap() {
  window.open('data/map.html', '_blank', 'width=800,height=600');
}

function openSongs() {
  window.open('songs.html', '_blank', 'width=600,height=400');
}

function showHint() {
  const hint = document.getElementById('hint');
  if(hint) {
    hint.style.display = 'block';
  }
}

<script>
  function showHint() {
    document.getElementById('hidden-hint').style.display = 'block';
  }
</script>
