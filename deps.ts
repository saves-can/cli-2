import { Logger } from "https://raw.githubusercontent.com/clau-org/api-core/v0.0.6/src/log.ts";
import $ from "https://deno.land/x/dax@0.30.1/mod.ts";
export * as Colors from "https://deno.land/std@0.181.0/fmt/colors.ts";
import Denomander, {
  Option,
} from "https://deno.land/x/denomander@0.9.3/mod.ts";
import { Command } from "https://deno.land/x/denomander@0.9.3/docs.ts";

const logger = new Logger({ prefix: "CLI" });

export { $, Command, Denomander, Logger, logger, Option };
