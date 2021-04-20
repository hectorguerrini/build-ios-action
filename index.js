import { getInput, setFailed } from "@actions/core";
import { exec as _exec } from "@actions/exec";

async function run() {
  try {    
    if (!getInput("p12-base64")) {
      throw new Error("P12 keys missing or in the wrong format.");
    }
    process.env.PROJECT_PATH = getInput("project-path");
    process.env.P12_BASE64 = getInput("p12-base64");    
    process.env.MOBILEPROVISION_BASE64 = getInput("mobileprovision-base64");
    process.env.CODE_SIGNING_IDENTITY = getInput("code-signing-identity");
    process.env.TEAM_ID = getInput("team-id");
    process.env.WORKSPACE_PATH = getInput("workspace-path");
    process.env.EXPORT_METHOD = getInput("export-method");
    process.env.CONFIGURATION = getInput("configuration");
    process.env.CERTIFICATE_PASSWORD = getInput("certificate-password");
    process.env.OUTPUT_PATH = getInput("output-path");
    process.env.SCHEME = getInput("scheme");
    process.env.DISABLE_TARGETS = getInput("disable-targets");
    process.env.BUILD_PODS = getInput("build-pods");
    process.env.PODS_PATH = getInput("pods-path");
    await _exec(`bash ${__dirname}/../build.sh`);
  } catch (error) {
    setFailed(error.message);
  }
}

run();