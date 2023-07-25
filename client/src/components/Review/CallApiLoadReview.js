async function callApiLoadReview(serverURL, reviewData) {
    try {
        const response = await fetch("/api/addReview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        });
        const result = await response.json();
        if (response.status !== 200) throw Error(result.message);
        const request = JSON.parse(result)
        return request;

    } catch (error) {
        console.error("Error adding review:", error);
    }
}

export default callApiLoadReview;
