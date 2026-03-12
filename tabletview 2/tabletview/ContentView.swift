//
//  ContentView.swift
//  tabletview
//
//  Created by Tommy McClure on 3/5/26.
//

import SwiftUI
import ClerkKit
import ClerkKitUI

struct ContentView: View {
    @Environment(Clerk.self) private var clerk
    @State private var authIsPresented = false
    
    var body: some View {
        VStack {
            UserButton(signedOutContent: {
                    Button("Sign in") {
                      authIsPresented = true
                    }
                  })
            }
        .prefetchClerkImages()
        .sheet(isPresented: $authIsPresented) {
              AuthView()
            }
    }
}

#Preview {
    ContentView()
        .environment(Clerk.shared)
}
