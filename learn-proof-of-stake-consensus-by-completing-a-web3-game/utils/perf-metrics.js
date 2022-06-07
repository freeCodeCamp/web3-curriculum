import { debug } from "./logger.js";

export default class PerfMetrics {
  constructor() {
    this._metrics = [];
    this._average = null;
    this._standardDeviation = null;
  }
  addMetric(metric) {
    const diff = metric.endTime - metric.startTime;
    this._metrics.push({ ...metric, diff });
  }
  calcStandardDeviation() {
    if (this._average === null) {
      this.calcAverage();
    }
    const average = this._average;
    const metricsLen = this._metrics.length;
    const sum = this._metrics.reduce((acc, curr) => {
      return acc + Math.pow(curr.diff - average, 2);
    }, 0);
    this._standardDeviation = Math.sqrt(sum / metricsLen);
  }
  calcAverage() {
    if (this._metrics.length > 1) {
      const sum = this._metrics.reduce((acc, curr, i) => {
        // Log progress every 10 iterations
        if (i % 10 === 0) {
          debug(`${i}/${this._metrics.length}`);
        }
        return acc + curr.diff;
      }, 0);
      this._average = sum / this._metrics.length;
    } else {
      this._average = this._metrics?.[0]?.diff;
    }
  }
  standardDeviation() {
    return this._standardDeviation;
  }
  average() {
    return this._average;
  }
  metrics() {
    return this._metrics;
  }
  metricsLen() {
    return this._metrics.length;
  }
  outLiers() {
    if (this._metrics.length === 0) {
      return [];
    }
    if (this._average === null) {
      this.calcAverage();
    }
    if (this._standardDeviation === null) {
      this.calcStandardDeviation();
    }
    const average = this._average;
    const standardDeviation = this._standardDeviation;
    const outLiers = this._metrics.filter(
      (metric) => metric.diff > average + standardDeviation
    );
    return outLiers;
  }
}
