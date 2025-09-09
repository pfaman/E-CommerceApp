import mongoose from 'mongoose';

const productSchema  = new mongoose.Schema({},{strickt: false})

export const Product = mongoose.model('Product', productSchema);
