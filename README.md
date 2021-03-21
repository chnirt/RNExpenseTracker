source: https://www.flaticon.com/free-icon/wallet_945962?term=wallet&page=2&position=9&page=2&position=9&related_id=945962&origin=search
https://www.flaticon.com/packs/sales-14

https://icons8.com/icon/set/transaction/ios

https://www.reactnativeschool.com/normalizing-text-and-spacing-between-screen-sizes

### See more:

- Building an Animation Hook in React Native: reactnativeschool.com/building-an-animation-hook-in-react-native

- App bars: top: https://material.io/components/app-bars-top#theming

# Install pod and run simulator in MacOS M1:
https://dev.to/craftzdog/how-to-get-a-react-native-project-to-work-on-m1-mac-4i4a

- After that app this code:
    `installer.pods_project.build_configurations.each do |config|
        config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
    end`
in `post_install do |installer|` and pod install again.

