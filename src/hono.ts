import { Hono } from "hono";
import { ENV } from "./types";

export const app = new Hono<{ Bindings: ENV }>()