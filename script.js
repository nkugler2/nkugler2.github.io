document.addEventListener('DOMContentLoaded', function() {
    const runButtons = document.querySelectorAll('.run-button');
    // Add a counter variable to track executions
    let executionCount = 0;
    
    // First, correct all existing prompts to the right format
    document.querySelectorAll('.prompt').forEach(prompt => {
        prompt.textContent = 'In [ ]:';
    });
    
    runButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cell = this.closest('.cell');
            const output = cell.querySelector('.cell-output');
            
            // Increment the counter
            executionCount++;
            
            // Remove 'hidden' class and add 'visible' class
            output.classList.remove('hidden');
            
            // Use setTimeout to trigger the transition
            setTimeout(() => {
                output.classList.add('visible');
            }, 10);
            
            this.textContent = 'Run ✓';
            
            const prompt = cell.querySelector('.prompt');
            // Update prompt with current execution count in the correct format
            prompt.textContent = `In [${executionCount}]:`;
            
            // Scroll to show the output after the transition
            setTimeout(() => {
                output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 500); // Match this with the transition duration
        });
    });
    
    // Simulate clicking the "Welcome" cell on page load
    setTimeout(() => {
        runButtons[0].click();
    }, 500);
});
