import { toast } from '@zerodevx/svelte-toast'

const commonTheme = {
    '--toastColor': 'white',
    '--toastBarHeight': 0
};

const messanger = {
    // This should be refactored
    success: (m, options = []) => toast.push(m, {
        ...options,
      theme: {
        '--toastBackground': '#25b053',
        ...commonTheme
      }
    }),
    warning: (m, options = []) => toast.push(m, {
        ...options,
      theme: {
        '--toastBackground': '#ffb901',
        ...commonTheme
      }
    }),
    error: (m, options = []) => toast.push(m, {
        ...options,
      theme: {
        '--toastBackground': '#f25022',
        ...commonTheme
      }
    }),
    info: (m, options = []) => toast.push(m, {
        ...options,
        theme: {
            '--toastBackground': 'grey',
            ...commonTheme
        }
    })
}

const types = ['success', 'warning', 'error', 'info'];

export function showToast(toastMessage) {
    for (let index = 0; index < types.length; index++) {

        const type = types[index];
        console.log(type, 'OnFor');
        if (toastMessage.hasOwnProperty(type) && toastMessage[type]) {
            console.log(toastMessage, 'OnIf');
            messanger[type](toastMessage[type], toastMessage.options)
        }
    }
}
