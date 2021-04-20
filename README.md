# iOS Build and Release Action


## Inputs

### `project-path`

**Required** .xcodeproj path.

### `p12-base64`

**Required if split key/cert**: Base64 encoded certificate for the p12 key.

### `mobileprovision-base64`

**Required** Base64 encoded mobileprovision file.

### `code-signing-identity`

**Required** For example, `"iOS Distribution"`.

### `team-id`

**Required** Team id.

### `workspace-path`

.xcworkspace path. Default `""`.

### `export-method`

Options app-store, `"ad-hoc"`, `"package"` `"enterprise"`, `"development"`, or `"developer-id"`. Default `"app-store"`.

### `configuration`

For example, `"Debug"`, `"Release"`. Default `"Release"`.

### `scheme`

For example, `"myscheme"`.

### `certificate-password`

Certificate password. Default `""`.

### `output-path`

Output path of ipa. Default `"output.ipa"`.

### `disable-targets`

These targets will not use automatic code signing and instead use the identity specified in other inputs. Input targets separated by ','. For example, 'MyApp,YourApp'. Default "".  (default to all targets)

### `build-pods`

Run the `pod install` command during the build.

### `pods-path`

The path to the Podfile. Default `"Podfile"`

## Example usage

### single p12

```yaml
- uses: sparkfabrik/ios-build-action@v1.0.0
  with:
    project-path: App.xcodeproj
    p12-base64: ${{ secrets.P12_BASE64 }}
    mobileprovision-base64: ${{ secrets.MOBILEPROVISION_BASE64 }}
    code-signing-identity: ${{ secrets.CODE_SIGNING_IDENTITY }}
    team-id: ${{ secrets.TEAM_ID }}
    workspace-path: App.xcworkspace # optional
```
