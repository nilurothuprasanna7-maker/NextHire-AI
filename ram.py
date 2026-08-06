import numpy as np
from scipy import stats

# Example data
data = [10, 20, 30, 40, 40, 50, 50, 50, 60]

# Calculate mean
mean = np.mean(data)

# Calculate median
median = np.median(data)

# Calculate mode
mode = stats.mode(data)

# Calculate variance
variance = np.var(data)

# Calculate standard deviation
sd = np.std(data)

# Printing results
print(f"Mean: {mean}")
print(f"Median: {median}")
print(f"Mode: {mode}")
print(f"Variance: {variance}")
print(f"Standard Deviation: {sd}")

