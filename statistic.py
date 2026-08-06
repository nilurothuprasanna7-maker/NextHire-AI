import statistics
import math
import numpy as np
from scipy.special import comb
from scipy.special import perm
from scipy.special import logsumexp

data = [10,20,30,40,50]
# REPLACE THIS ARRAY WITH YOUR MARKS 

# using statistics library
mean = statistics.mean(data)
median= statistics.median(data)
mode = statistics.mode(data)
gm= statistics.geometric_mean(data)  
hm= statistics.harmonic_mean(data) 

print(f"Mean: {mean}")
print(f"Median: {median}")
print(f"Mode: {mode}")
print(f"Geometric Mean : {gm}")
print(f"Harmonic Mean : {hm}")

# using math library
x = math.sqrt(49)
y=math.cbrt(64)
z = math.ceil(1.4)
w= math.floor(1.4)

print(f" Square Root  of 49  is : {x}")
print(f" Cube Root  of 64  is : {y}")
print(f" ceil  value : {z}")
print(f"Floor value : {w}")

# using numpy library
product = np.prod(data)
total= np.sum(data)
s = np.sin(data)
c= np.cos(data)

print(f" Product of array elements is  {product}")
print(f" Sum of array elements is  {total}")
print(f" Sine of array elements are  {s}")
print(f" Cosine of array elements are  {c}")

# using scipy library
cb= comb(9,2)
pr= perm(5,4)
lg =logsumexp(data)

print(f" Combinatioons  : {cb}")
print(f" Permutations : {pr}")
print(f" Log Sum Exponential of given array is  {lg}")

