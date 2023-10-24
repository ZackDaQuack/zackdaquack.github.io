function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    const numFlakes = 20;
    let snowflakeCount = 0;

    function addSnowflake() {
        if (snowflakeCount < numFlakes) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
            snowContainer.appendChild(snowflake);
            snowflakeCount++;

            setTimeout(addSnowflake, 500); 
        }
    }

    addSnowflake();
}

createSnowflakes()
