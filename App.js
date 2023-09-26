import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const CocoAlert = ({ visible, message, onClose, type }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {
                        type == "error" && (
                            <View style={{ flexDirection: 'column', width: '100%' }}>
                                <AntDesign name='closecircleo' size={30} color={'red'} style={styles.icon} />
                                <Text style={styles.errorText}>{'Error'}</Text>
                                <Text style={styles.modalText}>{message}</Text>

                                <TouchableOpacity
                                    style={[styles.modalButton, { backgroundColor: "#f00", width: '100%' }]}
                                    onPress={onClose}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        type == "info" && (
                            <View style={{ flexDirection: 'column', width: '100%' }}>
                                <AntDesign name='infocirlceo' size={30} color={'#00BCD4'} style={styles.icon} />

                                {/* <Text style={styles.warningText}>{'Warning'}</Text> */}
                                <Text style={styles.modalText}>{message}</Text>

                                <TouchableOpacity
                                    style={[styles.modalButton, { backgroundColor: "#00BCD4", width: '100%' }]}
                                    onPress={onClose}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        type == "warning" && (
                            <View style={{ flexDirection: 'column', width: '100%' }}>
                                <AntDesign name='warning' size={30} color={'#FFC107'} style={styles.icon} />
                                {/* <Text style={styles.errorText}>{'Error'}</Text> */}
                                <Text style={styles.warningText}>{'Warning'}</Text>
                                <Text style={styles.modalText}>{message}</Text>

                                <TouchableOpacity
                                    style={[styles.modalButton, { backgroundColor: "#FFC107", width: '100%' }]}
                                    onPress={onClose}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        type == "success" && (
                            <View style={{ flexDirection: 'column', width: '100%' }}>
                                <AntDesign name='checkcircleo' size={30} color={'#32CD32'} style={styles.icon} />
                                <Text style={styles.modalText}>{message}</Text>

                                <TouchableOpacity
                                    style={[styles.modalButton, { backgroundColor: '#32CD32' }]}
                                    onPress={onClose}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }

                    {/* <Text style={styles.modalTitle}>{title}</Text> */}

                </View>
            </View>
        </Modal>
    );


};

CocoAlert.propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    onClose: PropTypes.func
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '65%',
        alignItems: 'center',
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'salmon',
        fontSize: 17,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#f00',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'


    },
    warningText: {
        color: '#FFC107',
        fontSize: 17,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#FFC107',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        alignSelf: 'center'

    },
    infoText: {
        color: '#00BCD4',
        fontSize: 17,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#00BCD4',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    successText: {
        color: 'green',
        fontSize: 17,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: 'green',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    modalText: {
        fontSize: 17,
        marginBottom: 20,
        textAlign: 'center',
        padding: 10,
        color: '#000'
    },
    modalButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: '#00BCD4',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        width: '100%',
        textAlign: 'center',    
        fontWeight: 'bold',

    },

    icon: {
        margin: 10,
        alignSelf: 'center'
    }
});

export default CocoAlert;
