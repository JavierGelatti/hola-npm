#!/usr/bin/env node

import {saludar} from "./src/saludar.js";

const [executablePath, scriptPath, ...args] = process.argv;

const nombre = args[0];

saludar(nombre);
