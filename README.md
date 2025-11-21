Promises and Error Handling Challenge Lab 2

Critical Thinking Questions and Responses.
1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

Its important because you get to tailor each individual call in a specific way if you choose to. Using a single catch at the end of a promise chain makes it a bit harder to pinpoint the source of an error.

2. How does using custom error classes improve debugging and error identification?

It improves debugging and error identification because the class itself is structured and created in a specific way so its easy to understand what the errors are.

3. When might a retry mechanism be more effective than an immediate failure response?

A retry mechanism might be more effective than an immediate failure response when a temporary network issue occurs.

