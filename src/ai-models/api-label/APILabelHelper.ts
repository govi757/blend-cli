
import { readFileSync } from "node:fs";
import { tokenize } from "../tokenizer";
import * as tf from '@tensorflow/tfjs-node';
import wordIndex from './wordIndex.json';
import labels from './labels.json';
import { join } from "node:path";

export default class APILabelAIHelper {
    static async predict(apiName: string) {
        // const wordIndex: Record<string, number> = JSON.parse(readFileSync('./wordIndex.json', 'utf-8'));
    const vocabLength = Object.keys(wordIndex).length;
    // const labels: string[] = JSON.parse(readFileSync('./models/labels.json', 'utf-8'));
    const modelPath = `file://${join(__dirname, '/model.json')}`;
    const model = await tf.loadLayersModel(modelPath);

  const tokens = tokenize(apiName);
  const indices = tokens.map(tok => wordIndex[tok] || 0);

  const padded = new Array(vocabLength).fill(0);
//   indices.forEach((val, idx) => { padded[idx] = val; });
for (let i = 0; i < Math.min(vocabLength, indices.length); i++) {
  padded[i] = indices[i];
}

  const input = tf.tensor2d([padded], [1, vocabLength], 'float32');

  const prediction = model.predict(input) as tf.Tensor;
  const probs = prediction.arraySync() as number[][];

  const predictedLabel = labels[probs[0].indexOf(Math.max(...probs[0]))];
  return predictedLabel;
    }
}