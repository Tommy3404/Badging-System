//
//  tabletviewApp.swift
//  tabletview
//
//  Created by Tommy McClure on 3/5/26.
//

import SwiftUI
import ClerkKit

@main
struct tabletviewApp: App {
    init() {
        Clerk.configure(publishableKey: "pk_test_cmVsZXZhbnQtdHJvdXQtODQuY2xlcmsuYWNjb3VudHMuZGV2JA")
      }
    
    var body: some Scene {
        WindowGroup {
              ContentView()
                .environment(Clerk.shared)
            }
    }
}
