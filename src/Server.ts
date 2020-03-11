import {
  ConverterService,
  EndpointInfo,
  GlobalAcceptMimesMiddleware,
  IMiddleware,
  OverrideProvider,
  Res,
  ResponseData,
  SendResponseMiddleware,
  ServerLoader,
  ServerSettings
} from "@tsed/common";
import {isBoolean, isNumber, isStream, isString} from "@tsed/core";
import "@tsed/swagger";
import "@tsed/typeorm";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cors from "cors";
import * as methodOverride from "method-override";

const rootDir = __dirname;

@ServerSettings({
  rootDir,
  httpPort: process.env.PORT || 8083,
  httpsPort: false,
  acceptMimes: ["application/json"],
  mount: {
    "/v1": [
      `${rootDir}/controllers/**/**Ctrl.{ts,js}`
    ]
  },
  componentsScan: [
    `${rootDir}/services/*{.ts,.js}`,
    `${rootDir}/repositories/*{.ts,.js}`,
    `${rootDir}/protocols/*{.ts,.js}`
  ],
  typeorm: [
    {
      name: "default",
      type: "postgres",
      host: process.env.POSTGRES_HOST || "localhost",
      port: 5432,
      username: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "changeme",
      database: process.env.POSTGRES_DB || "postgres",
      logging: false,
      synchronize: true,
      entities: [
        `${rootDir}/entities/*{.ts,.js}`
      ],
      migrations: [
        `${rootDir}/migrations/*{.ts,.js}`
      ],
      subscribers: [
        `${rootDir}/subscriber/*{.ts,.js}`
      ]
    }
  ],
  swagger: {
    path: "/api-docs",
    spec: {
      securityDefinitions: {
        "auth:basic": {
          type: "basic"
        }
      }
    }
  }
})
export class Server extends ServerLoader {
  $beforeRoutesInit(): void | Promise<any> {
    this
      .use(GlobalAcceptMimesMiddleware)
      .use(cors())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));

    return null;
  }
}
