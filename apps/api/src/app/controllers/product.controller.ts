import { Firebase } from '../config/Firebase';

export const getProducts = async (req, res) => {
  try {
    const firestore = new Firebase().firestore();
    const ref = await firestore.collection('products').get();

    const products = ref.docs.map((product) => {
      return {
        id: product.id,
        ...product.data(),
      };
    });
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving products');
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const firestore = new Firebase().firestore();
    const snapshot = await firestore.collection('products').doc(id).get();

    if (!snapshot.exists) {
      res.status(404).send('Product not found');
    } else {
      const product = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      res.send(product);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving product');
  }
};

export const createProduct = async (req, res) => {
  try {
    const { image, name, description } = req.body;
    const firestore = new Firebase().firestore();
    const docRef = await firestore.collection('products').add({
      name,
      image,
      description,
    });

    const product = {
      id: docRef.id,
      name,
      image,
      description,
    };
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating product');
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, name, description } = req.body;
    const firestore = new Firebase().firestore();
    const docRef = firestore.collection('products').doc(id);

    await docRef.update({
      name,
      image,
      description,
    });

    const updatedProduct = {
      id,
      name,
      image,
      description,
    };
    res.send(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating product');
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const firestore = new Firebase().firestore();
    await firestore.collection('products').doc(id).delete();

    res.send('Product deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting product');
  }
};
