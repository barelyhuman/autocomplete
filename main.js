(function () {

  const autocompleteWrapper = document.querySelector('.autocomplete');
  const autocompleteBackground = autocompleteWrapper.querySelector('.autocomplete-background');
  const autocompleteInput = autocompleteWrapper.querySelector('.autocomplete-input');

  autocompleteInput.addEventListener('keyup', inputHandler);


  function inputHandler(event) {
    const inputValue = event.target.value;
    const exisitingValues = [
      'India',
      'Bread',
      'Butter',
      'Gaming',
      'Assassin\'s Creed',
      'All Have Faith'
    ];

    const suggestions = exisitingValues.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase()));

    if (suggestions.length) {
      const casedSuggestion = suggestions[0].toLowerCase().replace(inputValue.toLowerCase(), inputValue);
      const sliceFirst = casedSuggestion.slice(0, inputValue.length);
      const sliceEnd = casedSuggestion.slice(inputValue.length);
      autocompleteBackground.innerHTML = sliceFirst;
      autocompleteBackground.setAttribute('data-autocomplete', sliceEnd);
    } else {
      autocompleteBackground.innerHTML = inputValue;
      autocompleteBackground.setAttribute('data-autocomplete', '');
    }

    if (!inputValue) {
      autocompleteBackground.innerHTML = '';
      autocompleteBackground.setAttribute('data-autocomplete', '');
      return;
    }


  }







})();
