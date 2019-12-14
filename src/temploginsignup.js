{/* <Tabs style={{ backgroundColor: '#FFDC67' }} locked > 
                        <Tab tabStyle={{backgroundColor: 'rgba(0,0,0,0.1)'}} activeTabStyle={{backgroundColor: 'rgba(0,0,0,0.1)'}} heading="Login" > */}
                        <View style={{ flex: 1, backgroundColor: '#FFDC67', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity
                            onPress={() => this.increaseHeightOfBottomContainer()}
                        >
                            <View
                                pointerEvents="none"
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 30,
                                    alignSelf: 'center',
                                    backgroundColor: 'white',
                                    padding: 15, 
                                }}
                            >
                                <TextInput
                                    keyboardType="numeric"
                                    ref="textInputMobile"
                                    style={{flex: 1, fontSize: 20 }}
                                    placeholder="Enter your Mobile Number"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'work-sans-semi-bold', color: '#8D6C00'}}>Login with social account</Text>
                            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon style={{ color: '#8D6C00', marginHorizontal: 15 }} name='logo-google' size={30} />
                                <Icon style={{ color: '#8D6C00', marginHorizontal: 15 }} name='logo-facebook' size={30} />
                            </View>
                        </View>
                    </View>
                {/* </Tab>

                <Tab tabStyle={{backgroundColor: 'rgba(0,0,0,0)'}} activeTabStyle={{backgroundColor: 'rgba(0,0,0,0)'}} heading='Signup'>
                    <Content style={{ flex: 1, backgroundColor: '#FFDC67', paddingTop: 20 }}
                        contentContainerStyle={{ alignItems: 'center' }}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={styles.textInputView}
                            >
                                <TextInput
                                    ref="textInputMobile"
                                    style={{flex: 1, fontSize: 20 }}
                                    placeholder="Name"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View
                                style={styles.textInputView}
                            >
                                <TextInput
                                    ref="textInputMobile"
                                    style={{flex: 1, fontSize: 20 }}
                                    placeholder="Mobile"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View
                                style={styles.textInputView}
                            >
                                <TextInput
                                    ref="textInputMobile"
                                    style={{flex: 1, fontSize: 20 }}
                                    placeholder="Email"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View
                                style={styles.textInputView}
                            >
                                <TextInput
                                    ref="textInputMobile"
                                    style={{flex: 1, fontSize: 20 }}
                                    placeholder="Class"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                    </Content>
                </Tab>
            </Tabs> */}
