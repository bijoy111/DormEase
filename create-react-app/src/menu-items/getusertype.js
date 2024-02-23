const getUserType = async () => {
    try {
        const response = await fetch('http://localhost:3000/dashboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const { resident } = await response.json(); // Destructure resident from response
        console.log('hiajfkj');
        console.log(resident);
        return resident; // Return resident data
    } catch (error) {
        console.error('Error fetching user type:', error);
        return null;
    }
};

export default getUserType;
