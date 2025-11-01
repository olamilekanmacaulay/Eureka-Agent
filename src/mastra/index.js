import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { agent as eurekaAgent } from "./agents/householdScienceHelperAgent.js";

export const mastra = new Mastra({
  agents: { eureka: eurekaAgent },
  storage: new LibSQLStore({ url: ":memory:" }),
  logger: new PinoLogger({ name: "Mastra", level: "info" }),
  observability: { default: { enabled: true } },
});