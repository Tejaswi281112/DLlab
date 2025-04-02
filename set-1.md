Here’s the complete implementation for **Set 1**, following the given specifications:

---

### **(i) Import necessary libraries**
```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
```

---

### **(ii) Construct the model using Sequential API**
```python
# Define the model
model = Sequential([
    Dense(4, activation='tanh', input_shape=(3,)),  # layer1 - 4 units, tanh activation
    Dense(2, activation='tanh'),                    # layer2 - 2 units, tanh activation
    Dense(1, activation='sigmoid')                  # layer3 - 1 unit, sigmoid activation (binary classification)
])
```
🔹 **Input Shape:** `(3,)` – Assuming 3 input features  
🔹 **Hidden Layers:**  
- **Layer 1:** 4 units, `tanh` activation  
- **Layer 2:** 2 units, `tanh` activation  
- **Layer 3:** 1 unit, `sigmoid` activation for **binary classification**  

---

### **(iii) Compile the model**
```python
# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
```
🔹 **Optimizer:** `adam` (as specified)  
🔹 **Loss Function:** `binary_crossentropy` (since it's binary classification)  
🔹 **Metric:** `accuracy`  

---

### **(iv) Print the model summary**
```python
model.summary()
```
#### **Expected Output:**
```
Layer (Type)                 Output Shape              Param #   
=================================================================
dense (Dense)                (None, 4)                 12        
dense_1 (Dense)              (None, 2)                 10        
dense_2 (Dense)              (None, 1)                 3         
=================================================================
Total params: 25
Trainable params: 25
Non-trainable params: 0
```

Would you like a sample dataset to train this model? 🚀
