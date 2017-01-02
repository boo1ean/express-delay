import express = require('express');

declare function delay(min: number, max?: number): express.RequestHandler;

export = delay;
