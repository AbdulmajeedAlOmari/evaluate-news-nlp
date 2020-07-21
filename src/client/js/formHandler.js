function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.checkURL(formText)) {
        // In case input is correct, hide error message
        Client.hideErrorMessage()
    } else {
        // In case input is not a URL, hide error message if exists
        Client.showErrorMessage('Input should be a URL')
        return;
    }

    fetch(`/processText?url=${formText}`)
    .then(response => response.json())
    .then(data => {
        showResult(data)
    })
}

function showResult(data) {
    const formResultContainer = document.getElementById('results')

    const ul = document.createElement('ul')

    const liPolarity = document.createElement('li')
    const liPolarityConfidence = document.createElement('li')
    const liSubjectivity = document.createElement('li')
    const liSubjectivtyConfidence = document.createElement('li')

    const polarityConfidencePercentage = (data.polarity_confidence * 100).toFixed(2) + '%'
    const subjectivtyConfidencePercentage = (data.subjectivity_confidence * 100).toFixed(2) + '%'

    liPolarity.innerHTML = `<b>Polairty:</b> ${data.polarity}`
    liPolarityConfidence.innerHTML = `<b>Polarity Confidence:</b> ${polarityConfidencePercentage}`
    liSubjectivity.innerHTML = `<b>Subjectivity:</b> ${data.subjectivity}`
    liSubjectivtyConfidence.innerHTML = `<b>Subjectivity Confidence:</b> ${subjectivtyConfidencePercentage}`

    ul.appendChild(liPolarity)
    ul.appendChild(liPolarityConfidence)
    ul.appendChild(liSubjectivity)
    ul.appendChild(liSubjectivtyConfidence)

    // Remove children if exists
    formResultContainer.innerHTML = ''

    // Add (key, value) pairs in result container
    formResultContainer.appendChild(ul)
}

export { handleSubmit }
